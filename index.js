let playerCards = [];
let computerCards = [];

const allCards = [
    {
        id: 1,
        name: "Giraffe",
        lifespan: 25,
        speed: 60,
        strength: 2000,
        size: 5.9,
        intelligence: 6,
        cuteness: 5,
        weight: 1900,
        aggression: 5,
        img: "horse.jpg"
    },
    {
        id: 2,
        name: "Bat",
        lifespan: 20,
        speed: 100,
        strength: 5,
        size: 0.1,
        intelligence: 4,
        cuteness: 3,
        weight: 0.1,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 3,
        name: "Cow",
        lifespan: 5,
        speed: 25,
        strength: 30,
        size: 1.8,
        intelligence: 2,
        cuteness: 6,
        weight: 900,
        aggression: 4,
        img: "horse.jpg"
    },
    {
        id: 4,
        name: "Dog",
        lifespan: 13,
        speed: 48,
        strength: 30,
        size: 1,
        intelligence: 7,
        cuteness: 9,
        weight: 100,
        aggression: 6,
        img: "horse.jpg"
    },
    {
        id: 5,
        name: "Lion",
        lifespan: 15,
        speed: 80,
        strength: 600,
        size: 5,
        intelligence: 7,
        cuteness: 4,
        weight: 190,
        aggression: 8,
        img: "horse.jpg"
    },
    {
        id: 6,
        name: "Sloth",
        lifespan: 30,
        speed: 0.27,
        strength: 500,
        size: 0.9,
        intelligence: 5,
        cuteness: 6,
        weight: 30,
        aggression: 4,
        img: "horse.jpg"
    },
    {
        id: 7,
        name: "Cat",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 8,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 8,
        name: "Elephant",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 6,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 9,
        name: "Tiger",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 3,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 10,
        name: "Whale",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 7,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 11,
        name: "Rhino",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 6,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 12,
        name: "Shark",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 2,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 13,
        name: "Pigeon",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 0,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 14,
        name: "Bear",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 6,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 15,
        name: "Snake",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 1,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 16,
        name: "Orangatan",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 2,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 17,
        name: "Kangaroo",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 4,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 18,
        name: "Crab",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 1,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 19,
        name: "Fox",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 5,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 20,
        name: "Panda",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 9,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 21,
        name: "Eagle",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 3,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 22,
        name: "Lizard",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 1,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 23,
        name: "Zebra",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 4,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 24,
        name: "Pig",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 4,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 25,
        name: "Squirel",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 8,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 26,
        name: "Camel",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 3,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 27,
        name: "Penguin",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 7,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 28,
        name: "Horse",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 6,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 29,
        name: "Flamingo",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 5,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    },
    {
        id: 30,
        name: "Owl",
        lifespan: 10,
        speed: 20,
        strength: 30,
        size: 5,
        intelligence: 9,
        cuteness: 7,
        weight: 30,
        aggression: 3,
        img: "horse.jpg"
    }
]


// shuffle pack
let shuffled = allCards
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)


// split pack
playerCards = shuffled.slice(0,15)
computerCards = shuffled.slice(15)
let middleCards = []

let selectedOption = "";
const playerCardStats = document.getElementById("player-card-stats").getElementsByClassName("card-stat")
const playerCard = document.getElementById("player-card")
const computerCard = document.getElementById("computer-card")
const playerCardNumber = document.getElementById("player-card-number")
const computerCardNumber = document.getElementById("computer-card-number")
const compareCardBtn = document.getElementById("compare-cards")
const nextCardBtn = document.getElementById("next-cards")
const middleStackNumber = document.getElementById("middle-stack-number")

const nextCards = () => {
    console.log("next card")
    computerCard.classList.add("hide-card")
    compareCardBtn.classList.remove("disabled")
    nextCardBtn.classList.add("disabled")

    setTimeout(() => {
        updateCards(playerCards[0], computerCards[0])
    }, 1000);
    

}

const updateCards = (player, computer) => {
    console.log(middleCards)
    for (let i = 0; i < playerCardStats.length; i++) {
        playerCardStats[i].classList.remove("active-option")
    }
    selectedOption = ""


    playerCard.querySelector("h2").innerHTML = player.name
    playerCard.querySelector("img").src = `./img/${player.img}`
    playerCard.querySelector(".lifespan").innerHTML = player.lifespan
    playerCard.querySelector(".speed").innerHTML = player.speed
    playerCard.querySelector(".strength").innerHTML = player.strength
    playerCard.querySelector(".size").innerHTML = player.size
    playerCard.querySelector(".intelligence").innerHTML = player.intelligence
    playerCard.querySelector(".cuteness").innerHTML = player.cuteness
    playerCard.querySelector(".weight").innerHTML = player.weight
    playerCard.querySelector(".aggression").innerHTML = player.aggression
    
    computerCard.querySelector("h2").innerHTML = computer.name
    computerCard.querySelector("img").src = `./img/${computer.img}`
    computerCard.querySelector(".lifespan").innerHTML = computer.lifespan
    computerCard.querySelector(".speed").innerHTML = computer.speed
    computerCard.querySelector(".strength").innerHTML = computer.strength
    computerCard.querySelector(".size").innerHTML = computer.size
    computerCard.querySelector(".intelligence").innerHTML = computer.intelligence
    computerCard.querySelector(".cuteness").innerHTML = computer.cuteness
    computerCard.querySelector(".weight").innerHTML = computer.weight
    computerCard.querySelector(".aggression").innerHTML = computer.aggression

    playerCardNumber.innerHTML = playerCards.length
    computerCardNumber.innerHTML = computerCards.length
    middleStackNumber.innerHTML = middleCards.length

}

const showComputerCard = () => {
    computerCard.classList.remove("hide-card")
    console.log(computerCard.classList)
}

const compareCardData = (e) => {
    if (selectedOption === "") {
        alert("Please Select a card attribute to compare")
        return
    }

    console.log(middleCards)

    console.log(playerCards.length)
    console.log(computerCards.length)
    const topPlayerCard = playerCards[0];
    const topComputerCard = computerCards[0];
    
    if (topPlayerCard[selectedOption] > topComputerCard[selectedOption]) {
        console.log("player wins")
        showComputerCard()
        // give cards to player and take away from computer
        if (middleCards.length > 0) {
            for (let i = 0; i < middleCards.length; i++) {
                playerCards.push(middleCards[i])
            }
            middleCards.length = 0
        }

        playerCards.push(playerCards.shift())
        playerCards.push(computerCards.shift())
    } else if (topPlayerCard[selectedOption] === topComputerCard[selectedOption]) {
        console.log("draw")
        showComputerCard()
        // play next card in deck to win all 4 cards
        middleCards.push(playerCards.shift())
        middleCards.push(computerCards.shift())
    } else {
        console.log("computer wins")
        showComputerCard()
        // give cards to player and take away from computer
        if (middleCards.length > 0) {
            for (let i = 0; i < middleCards.length; i++) {
                computerCards.push(middleCards[i])
            }
            middleCards.length = 0
        }

        computerCards.push(playerCards.shift())
        computerCards.push(computerCards.shift())
    }

    if (computerCards.length === 0) {
        console.log("player wins game")
        console.log(playerCards)
        document.getElementById("compare-cards").classList.add("hide-btn")
    }

    if (playerCards.length === 0) {
        console.log("computer wins game")
        console.log(computerCards)
        document.getElementById("compare-cards").classList.add("hide-btn")
    }

    compareCardBtn.classList.add("disabled")
    nextCardBtn.classList.remove("disabled")
}


const storeStatToMatch = (e) => {
    // console.log(e.currentTarget)
    
    // set new active
    // currentarget only refers to element event handler attached to, not child elements
    e.currentTarget.classList.add("active-option")
    
    // // get stat option
    selectedOption = e.currentTarget.querySelector(".option").innerHTML
    console.log(selectedOption)
}

// display card before select card stat
updateCards(playerCards[0], computerCards[0])

compareCardBtn.addEventListener('click', compareCardData)

nextCardBtn.addEventListener('click', nextCards)


for (let i = 0; i < playerCardStats.length; i++) {
    playerCardStats[i].addEventListener('click', storeStatToMatch)
}

// change deck stats, add imgs
// game win, game over, restart