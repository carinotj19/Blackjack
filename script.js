document.addEventListener("DOMContentLoaded", () => {
    const cardsEl = document.getElementById("cards-el");
    const sumEl = document.getElementById("sum-el");
    const msgEl = document.getElementById("message-el");
    const startBtn = document.getElementById("start-btn");

    let cards = [];
    let sum = 0;
    let hasBlackJack = false;
    let isAlive = false;

    function getRandomCard() {
        const n = Math.floor(Math.random() * 13) + 1;
        if (n > 10) return 10;
        if (n === 1) return 11;
        return n;
    }

    function renderGame() {
        cardsEl.textContent = cards.join("  ");
        sumEl.textContent = sum;
        if (sum < 21) {
            msgEl.textContent = "Draw another card?";
        } else if (sum === 21) {
            msgEl.textContent = "You got BlackJack!";
            hasBlackJack = true;
        } else {
            msgEl.textContent = "You’re out of the game!";
            isAlive = false;
        }
        startBtn.textContent = hasBlackJack ? "Restart" : "Start Game";
        startBtn.disabled = false;
    }

    startBtn.addEventListener("click", () => {
        startBtn.disabled = true;
        if (!isAlive || hasBlackJack) {
            cards = [];
            sum = 0;
            hasBlackJack = false;
            isAlive = true;
            cards.push(getRandomCard(), getRandomCard());
            sum = cards.reduce((a, b) => a + b, 0);
        } else {
            const card = getRandomCard();
            cards.push(card);
            sum += card;
        }
        renderGame();
    });

    isAlive = false;
    msgEl.textContent = "Click Start to play!";
});
