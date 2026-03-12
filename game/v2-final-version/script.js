(function () {
    "use strict";
    console.log("reading js");

    // Audio elements
    const rollSound = document.querySelector("#roll-sound");
    const newGameSound = document.querySelector("#newgame-sound");
    const holdSound = document.querySelector("#hold-sound");

    // Control buttons
    const setScoreBtn = document.querySelector("#set-score");
    const rollBtn = document.querySelector("#roll-dice");
    const holdBtn = document.querySelector("#hold-turn");
    const newGameBtn = document.querySelector("#new-game");

    // Player panels
    const player1Panel = document.querySelector("#player1-panel");
    const player2Panel = document.querySelector("#player2-panel");

    // Dice images
    const player1Die = document.querySelector("#player1-die");
    const player2Die = document.querySelector("#player2-die");

    // Total score displays
    const player1Total = document.querySelector("#player1-total");
    const player2Total = document.querySelector("#player2-total");

    // Turn score displays
    const player1Turn = document.querySelector("#player1-turn");
    const player2Turn = document.querySelector("#player2-turn");

    // Player name elements
    const player1Name = document.querySelector("#player1-name");
    const player2Name = document.querySelector("#player2-name");

    // Edit name buttons
    const editPlayer1Btn = document.querySelector("#edit-player1");
    const editPlayer2Btn = document.querySelector("#edit-player2");

    // Console message area
    const consoleMessage = document.querySelector("#console-message");

    // Main game data object
    const gameData = {
        diceImages: [
            "images/die1.png",
            "images/die2.png",
            "images/die3.png",
            "images/die4.png",
            "images/die5.png",
            "images/die6.png"
        ],
        playerNames: ["Player 1", "Player 2"],
        totals: [0, 0],
        turnScore: 0,
        currentPlayer: 0,
        winningScore: 30,
        gameOver: false
    };

    // Update the player name text on the page
    function updatePlayerNames() {
        player1Name.textContent = gameData.playerNames[0];
        player2Name.textContent = gameData.playerNames[1];
    }

    // Reset the game to its starting state
    function initGame() {
        gameData.totals = [0, 0];
        gameData.turnScore = 0;
        gameData.currentPlayer = 0;
        gameData.gameOver = false;

        updatePlayerNames();

        player1Total.textContent = "0";
        player2Total.textContent = "0";
        player1Turn.textContent = "0";
        player2Turn.textContent = "0";

        player1Die.src = gameData.diceImages[0];
        player2Die.src = gameData.diceImages[0];

        player1Panel.classList.add("active");
        player2Panel.classList.remove("active");

        rollBtn.disabled = false;
        holdBtn.disabled = false;

        consoleMessage.textContent = `Console Message: First to ${gameData.winningScore} wins. ${gameData.playerNames[0]} starts. Roll the die.`;
    }

    // Update total and turn scores on the page
    function updateScores() {
        player1Total.textContent = gameData.totals[0];
        player2Total.textContent = gameData.totals[1];

        if (gameData.currentPlayer === 0) {
            player1Turn.textContent = gameData.turnScore;
            player2Turn.textContent = "0";
        } else {
            player2Turn.textContent = gameData.turnScore;
            player1Turn.textContent = "0";
        }
    }

    // Highlight the active player's panel
    function updateActivePlayer() {
        if (gameData.currentPlayer === 0) {
            player1Panel.classList.add("active");
            player2Panel.classList.remove("active");
        } else {
            player2Panel.classList.add("active");
            player1Panel.classList.remove("active");
        }
    }

    // Switch from one player to the other
    function switchPlayer() {
        gameData.turnScore = 0;
        gameData.currentPlayer = gameData.currentPlayer === 0 ? 1 : 0;

        updateScores();
        updateActivePlayer();

        const nextPlayerName = gameData.playerNames[gameData.currentPlayer];
        consoleMessage.textContent = `Console Message: ${nextPlayerName}'s turn. First to ${gameData.winningScore} wins.`;
    }

    // Play a sound effect
    function playSound(sound) {
        sound.currentTime = 0;
        sound.play();
    }

    // Roll the die and update the game state
    function rollDie() {
        if (gameData.gameOver) {
            return;
        }

        playSound(rollSound);

        const roll = Math.floor(Math.random() * 6) + 1;
        const currentDie = gameData.currentPlayer === 0 ? player1Die : player2Die;
        const currentPlayerName = gameData.playerNames[gameData.currentPlayer];

        currentDie.src = gameData.diceImages[roll - 1];

        if (roll === 1) {
            consoleMessage.textContent = `Console Message: ${currentPlayerName} rolled a 1 and lost the turn.`;
            switchPlayer();
        } else {
            gameData.turnScore += roll;
            updateScores();
            consoleMessage.textContent = `Console Message: ${currentPlayerName} rolled a ${roll}. Current turn score: ${gameData.turnScore}.`;
        }
    }

    // Hold the turn score and add it to the player's total
        function holdTurn() {

        if (gameData.gameOver) {
            return;
        }

        playSound(holdSound);

        const currentPlayerName = gameData.playerNames[gameData.currentPlayer];

        gameData.totals[gameData.currentPlayer] += gameData.turnScore;
        updateScores();

        if (gameData.totals[gameData.currentPlayer] >= gameData.winningScore) {
            gameData.gameOver = true;
            consoleMessage.textContent = `Console Message: ${currentPlayerName} wins with ${gameData.totals[gameData.currentPlayer]} points!`;
            rollBtn.disabled = true;
            holdBtn.disabled = true;
            return;
        }

        consoleMessage.textContent = `Console Message: ${currentPlayerName} holds. Total score is now ${gameData.totals[gameData.currentPlayer]}.`;
        switchPlayer();
    }

    // Let the players choose a new winning score
    function setWinningScore() {
        const newScore = prompt("Enter the winning score:", gameData.winningScore);

        if (newScore === null) {
            return;
        }

        const scoreNumber = parseInt(newScore);

        if (isNaN(scoreNumber) || scoreNumber <= 0) {
            consoleMessage.textContent = "Console Message: Please enter a valid number greater than 0.";
            return;
        }

        gameData.winningScore = scoreNumber;
        consoleMessage.textContent = `Console Message: Winning score is now ${gameData.winningScore}. Click New Game to start fresh.`;
    }

    // Let a player edit their displayed name
    function editPlayerName(playerIndex) {
        const currentName = gameData.playerNames[playerIndex];
        const newName = prompt("Enter player name:", currentName);

        if (newName === null) {
            return;
        }

        const trimmedName = newName.trim();

        if (trimmedName === "") {
            consoleMessage.textContent = "Console Message: Name cannot be empty.";
            return;
        }

        gameData.playerNames[playerIndex] = trimmedName;
        updatePlayerNames();
        consoleMessage.textContent = `Console Message: ${trimmedName}'s name has been updated.`;
    }

    // Button event listeners
    setScoreBtn.addEventListener("click", setWinningScore);
    rollBtn.addEventListener("click", rollDie);
    holdBtn.addEventListener("click", holdTurn);

    newGameBtn.addEventListener("click", function () {
        playSound(newGameSound);
        initGame();
    });

    editPlayer1Btn.addEventListener("click", function () {
        editPlayerName(0);
    });

    editPlayer2Btn.addEventListener("click", function () {
        editPlayerName(1);
    });

    // Start the game when the page loads
    initGame();
})();