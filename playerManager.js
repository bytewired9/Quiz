let players = {}; // Object to store player data

// Add a player
function addPlayer(playerName) {
    const playerId = generateID();
    players[playerId] = {
        name: playerName,
        progress: { currentQuestion: 0, totalQuestions: 75} // Set YOUR_TOTAL_QUESTIONS accordingly
    };
    return playerId;
}

// Update progress for a player
function updateProgress(playerId, currentQuestion, totalQuestions) {
    if (players[playerId]) {
        players[playerId].progress = { currentQuestion, totalQuestions };
    }
}

// Get progress of all players
function getProgress() {
    return Object.values(players).map(player => player.progress);
}

// Generate a unique ID for a new player
function generateID() {
    // Generate a random number between 100000 and 999999
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Get player details by ID
function getPlayerById(playerId) {
    return players[playerId];
}

function getAllPlayers() {
    return Object.values(players);
}

function resetAllPlayers() {
    // Depending on how your players are stored, this method might vary
    players = {}; // If players are stored in an object
    // or, for example, if you have a database, you would clear the table there
}

// Export the functions so they can be used by other modules
module.exports = { addPlayer, updateProgress, getProgress, getPlayerById, getAllPlayers, resetAllPlayers};
