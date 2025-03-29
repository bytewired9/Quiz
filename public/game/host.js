const socket = io();
const playerProgressContainer = document.getElementById('playerProgressContainer');
let barsCreated = false;
socket.emit('registerHost');
function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
}

function clearProgressBars() {
    while (playerProgressContainer.firstChild) {
        playerProgressContainer.removeChild(playerProgressContainer.firstChild);
    }
}

function createProgressBar(playerData) {
    console.log(`created progressbar for ${playerData.name}`)
    let playerDiv = document.createElement('div');
    playerDiv.id = `player-${playerData.name}`;
    playerDiv.classList.add('progress-container');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.id = `progress-bar-${playerData.name}`;
    progressBar.style.width = `${playerData.progress}%`;

    // Set the fill color of the progress bar based on the player's name
    progressBar.style.backgroundColor = stringToColor(playerData.name);

    const playerName = document.createElement('span');
    playerName.classList.add('player-name');
    playerName.textContent = playerData.name;

    playerDiv.appendChild(progressBar);
    playerDiv.appendChild(playerName);
    playerProgressContainer.appendChild(playerDiv);
}



function updateProgressBars(playerProgress) {
    const progressBar = document.getElementById(`progress-bar-${playerProgress.name}`);
    if (!progressBar) {
        // The progress bar does not exist, which means we need to create it
        createProgressBar(playerProgress);
        return;
    }
    if (progressBar) {
        const progressPercent = (playerProgress.currentQuestion / playerProgress.totalQuestions) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    if (playerProgress.progress === 100) {
        handleWin(playerProgress.name);
    }
}


function handleWin(winnerName) {
    // Handle the win scenario
    alert(`${winnerName} has won the game!`);
    // Optionally, implement logic to end or reset the game
}

socket.on('gameStarted', () => {
    console.log('Game has started for all players.');
    // This is where you handle the game start for the host,
    // but don't create progress bars here.
});

socket.on('hostGameStarted', (allPlayersData) => {
    console.log("Host-specific game start event received");
    if (!barsCreated) {
        clearProgressBars(); // Clear existing bars
        console.log('Received allPlayersData:', allPlayersData);
        allPlayersData.forEach(createProgressBar);
        barsCreated = true; // Set the flag to prevent recreation
    }
});

socket.on('progressUpdate', (playersProgress) => {
    console.log('Progress update received:', playersProgress);
    updateProgressBars(playersProgress);
});

socket.on('gameWon', (data) => {
    const { winner, runnerUps } = data;
    let runnerUpsHtml = runnerUps?.join(' and ') || 'No runner-ups'; // Safely join runner-ups names

    document.body.innerHTML = `
        <div class="win-container">
            <h1 class="win-message">${winner} WON!</h1>
            <p class="runner-ups">Runner-ups: ${runnerUpsHtml}</p>
            <a href="/host" class="return-button">Return</a>
        </div>
    `;
});

