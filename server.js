const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const playerManager = require('./playerManager');
const os = require('os');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = 80; // You can choose any port you prefer

let hostSocketId = null;
let activePlayerNames = new Set();
function getServerIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (!iface.internal && iface.family === 'IPv4') {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

const serverIP = getServerIP();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the host page at the /host endpoint
app.get('/host', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'host.html'));
});

// Serve the player page at the root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'player.html'));
});

app.post('/join', (req, res) => {
  const playerName = req.body.name;
  const playerId = playerManager.addPlayer(playerName);
  res.json({ id: playerId });
  io.emit('newPlayer', playerName); // Notify all clients about the new player
  console.log(`${playerName} Joined the game! ID: ${playerId}`);
});

app.post('/progress', (req, res) => {
  const { userId, currentQuestion, totalQuestions } = req.body;
  playerManager.updateProgress(userId, currentQuestion, totalQuestions);
  if (currentQuestion === 0) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else if (currentQuestion === totalQuestions) {
    res.sendFile(path.join(__dirname, 'public', 'win.html'));
  } else {
    res.status(200).end();
  }
  io.emit('progressUpdate', playerManager.getProgress()); // Emit progress updates
});

// Socket.IO connection handler
io.on('connection', (socket) => {

  console.log('A user connected');
  io.emit('IP', serverIP)
  socket.on('joinGame', (playerName) => {
    const playerId = playerManager.addPlayer(playerName);
    if (activePlayerNames.has(playerName)) {
      socket.emit('nameError', 'This name is already taken.');
      return;
    }
    // Emit to all clients, including the host
    activePlayerNames.add(playerName);
    io.emit('newPlayer', playerName);
    socket.emit('playerID', playerId); // Emit only to the player who joined
    console.log(`${playerName} Joined the game! ID: ${playerId}`);
  });

  socket.on('startGame', () => {
    // Emit 'gameStarted' to all clients
    io.emit('gameStarted');
    console.log('Game started, emitting all player data');
  });

  socket.on('registerHost', () => {
    hostSocketId = socket.id;  // Store the host's socket ID
    console.log(`Host registered with ID: ${hostSocketId}`);

    // Send the current game state to the host
    const allPlayersData = playerManager.getAllPlayers().map(player => ({
      name: player.name,
      progress: player.progress
    }));
    socket.emit('hostGameStarted', allPlayersData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    if (socket.id === hostSocketId) {
      // Reset hostSocketId if the host disconnects
      hostSocketId = null;
    }
    // If you need to remove a player or perform cleanup, do it here
    // For example, if you're tracking connected hosts separately:
    // hosts.delete(socket.id); // Assuming 'hosts' is a Set or Map of connected host sockets

    // The removeAllListeners is not typically necessary for disconnect as listeners
    // are cleaned up automatically, but it's shown here for illustrative purposes
    socket.removeAllListeners('startGame');
    socket.removeAllListeners('submitProgress');
  });


  socket.on('submitProgress', (progressData) => {
    const player = playerManager.getPlayerById(progressData.userId);
    if (player) {
      // Update the player's progress
      playerManager.updateProgress(progressData.userId, progressData.currentQuestion, progressData.totalQuestions);

      // Prepare the progress data to send
      const updatedProgress = {
        name: player.name,
        currentQuestion: progressData.currentQuestion,
        totalQuestions: progressData.totalQuestions
      };

      // Check if the player has won
      if (progressData.currentQuestion == progressData.totalQuestions) {
        const winnerName = player.name;
        console.log(`${winnerName} has won the game!`);

        // Determine runner-ups
        const allPlayers = playerManager.getAllPlayers();
        console.log("All players' data:", allPlayers);

        const runnerUps = allPlayers
          .filter(p => p.id !== progressData.userId) // Exclude the winner
          .sort((a, b) => b.currentQuestion - a.currentQuestion) // Sort by progress
          .slice(0, 2) // Get top 2 as runner-ups
          .map(p => p.name);

        console.log(`Runner-ups: ${runnerUps.join(', ')}`);
        io.emit('gameWon', { winner: winnerName, runnerUps });
        playerManager.resetAllPlayers();
        activePlayerNames.clear();
      } else {
        // If not a win, emit the progress update
        console.log('Sending progressUpdate:', updatedProgress);
        io.emit('progressUpdate', updatedProgress);
      }
    }
  });
});





server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = { app, server };
