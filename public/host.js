const socket = io(); // Initialize socket.io client
const playerList = document.getElementById('playerList');
const startButton = document.getElementById('startGame');
const playerCount = document.getElementById('playerCount'); // Get the player count element
const ipsection = document.getElementById('ip');
document.addEventListener('DOMContentLoaded', function() {

    startButton.addEventListener('click', (e) => {
        e.preventDefault();  // Prevents default form submission behavior
        socket.emit('startGame');
        window.location.href = `/game/host.html`;

    });
});

function updatePlayerCount() {
    playerCount.textContent = `Players: ${playerList.children.length}`;
}

function startGame() {
    socket.emit(startGame)
}
socket.on('IP', ServerIP =>{
    ipsection.textContent = `${ServerIP}:3000`
});

// Event listener for new players joining
socket.on('newPlayer', playerName => {
    const playerItem = document.createElement('li');
    playerItem.textContent = playerName;
    playerList.appendChild(playerItem);
    updatePlayerCount()
});

// Event listener for progress updates
socket.on('progressUpdate', progressData => {
    // Update the player progress here
    // For example, you could update a progress bar for each player
    console.log('Progress Data:', progressData); // Placeholder for actual update logic
});



// Additional functionalities like starting the game can be added here
