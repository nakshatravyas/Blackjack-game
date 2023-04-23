let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumel = document.getElementById('sum-el')
start = document.getElementById('start-btn')
cardsel = document.getElementById('cards-el')
newcard = document.getElementById("new-card")
messageel = document.getElementById('message-el')
playerel = document.getElementById('player-el')

let player = {
    name: "Nakshatra",
    chips: 200
}

playerel.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11
    }
    else if (random > 10 && random < 14) {
        return 10
    }
    else {
        return random
    }
}

function startgame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame();
}

function rendergame() {
    cardsel.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsel.textContent += cards[i] + " "
    }
    sumel.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        player.chips = player.chips + 50
        playerel.textContent = player.name + ": $" + player.chips
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        player.chips = player.chips - 50
        playerel.textContent = player.name + ": $" + player.chips
    }
    messageel.textContent = message;
}
start.addEventListener('click', () => {
    if (player.chips > 0) {

        startgame();
    }
    else {
        let message = "You don't have enough chips!"
        messageel.textContent = message;
    }
});
newcard.addEventListener('click', () => {

    if (isAlive === true && hasBlackJack === false) {

        let thirdcard = getRandomCard()
        sum = sum + thirdcard
        cards.push(thirdcard)
        rendergame();

    }

    else {
        let message = "Start new game!"
        messageel.textContent = message;

    }
})

