const joinButton = document.getElementById('joinButton');
const nameInput = document.getElementById('nameInput');
const statusDiv = document.getElementById('status');
const socket = io(); // Initialize socket.io client

// Variables to store player ID and name
let playerID;
let playerName;

// Listen for the gameStarted event
socket.on('gameStarted', () => {
    if (playerID !== null && playerID !== undefined) {
        window.location.href = `/game/game.html?id=${playerID}&name=${encodeURIComponent(playerName)}`;
    }
});


// Emit joinGame event to the server
joinButton.addEventListener('click', () => {
    playerName = nameInput.value.trim();
    if (!playerName) {
        statusDiv.textContent = 'Please enter your name.';
        return;
    }
    if (playerName.length > 20) {
        statusDiv.textContent = 'Name must be 20 characters or less.';
        return;
    }

    if (!/^[ -~]+$/.test(playerName)) {
        statusDiv.textContent = 'Name must contain only ASCII characters.';
        return;
    }

    socket.emit('joinGame', playerName);
});

socket.on('nameError', errorMessage => {
    statusDiv.textContent = errorMessage;
});

// Handle response from server
socket.on('playerID', id => {
    playerID = id;
    playerName = nameInput.value.trim();

    // Replace HTML with wait screen
    document.body.innerHTML = `
        <div class="wait-screen">
            <h2>Hi ${playerName}, welcome to the game!</h2>
            <p>Your player ID is <b>${id}</b>.</p>
            <p>Please wait, the game will start soon...</p>
        </div>
    `;
});

// Additional logic for player interactions can be added here
