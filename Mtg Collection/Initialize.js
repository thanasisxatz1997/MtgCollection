let cardData = ""
let data = ""



window.onload = function () {
    GetCollections()
    // GetCards()
    LoadCardAddPanel()
    LoadCardPanel()
}

// document.body.onload = LoadCardPanel;

async function GetCollections() {
    const myfetch = await fetch("http://127.0.0.1:4000/collections")
    data = await myfetch.json()
    console.log(data);
}

async function GetCards() {
    const myfetch = await fetch("http://127.0.0.1:4000/cardsAKRU")
    data = await myfetch.json()
    console.log("I AM HERE")
    console.log("Data="+JSON.stringify(data))
}

async function LoadCardAddPanel() {

    const myfetch = await fetch("http://127.0.0.1:4000/cardsAKRU")
    data = await myfetch.json()
    console.log("I AM HERE")
    console.log("Data="+JSON.stringify(data))
    var previousName = ""
    for (const card of data) {
        console.log(card)
        if (previousName != card.name) {
            const cardListItem=document.createElement('div')
            cardListItem.setAttribute('draggable',true)
            const cardPicture=document.createElement("img")
            const imglink = card.imageUrl
            cardPicture.setAttribute("src", imglink)
            cardPicture.setAttribute('draggable',false)
            cardListItem.appendChild(cardPicture)
            cardListItem.classList.add('cardSmall')
            document.getElementById("CardAddContainer").appendChild(cardListItem)
        }
        previousName = card.name
    }
    // const myfetch = await fetch("https://api.magicthegathering.io/v1/cards?set=DMU")
    // // const myfetch = await fetch("https://api.magicthegathering.io/v1/cards?sets?The%20Brothers%20War")
    // cardData = await myfetch.json()
    // console.log(cardData.cards)
    // var previousName = ""
    // for (const card of cardData.cards) {
    //     // console.log("pre name: "+previousName)
    //     // console.log("name: "+cardData.name)
    //     if (previousName != card.name) {
    //         // console.log(card.imageUrl)
    //         const cardListItem = document.createElement('div')
    //         // const newText = document.createTextNode(card.name)
    //         const cardPicture = document.createElement("img")
    //         // cardListItem.classList.add('buttonAdd')
    //         const cardButtons = document.createElement("button")
    //         cardButtons.setAttribute("class", "buttonAdd")
    //         cardButtons.textContent = "+"
    //         const imglink = card.imageUrl
    //         cardPicture.setAttribute("src", imglink)
    //         // cardListItem.appendChild(newText)
    //         cardListItem.appendChild(cardPicture)
    //         cardListItem.appendChild(cardButtons)
    //         cardListItem.classList.add('card')

    //         // const currentDiv = document.getElementById("End");

    //         document.getElementById("CardPanel").appendChild(cardListItem)
    //         // document.body.appendChild(cardListItem)
    //         // document.body.insertBefore(cardListItem,currentDiv)
    //     }
    //     previousName = card.name
    //     // console.log(previousName)
    // }
}


async function LoadCardPanel() {
    
    const myfetch = await fetch("https://api.magicthegathering.io/v1/cards?set=DMU")
    // const myfetch = await fetch("https://api.magicthegathering.io/v1/cards?sets?The%20Brothers%20War")
    cardData = await myfetch.json()
    console.log(cardData.cards)
    var previousName = ""
    for (const card of cardData.cards) {
        // console.log("pre name: "+previousName)
        // console.log("name: "+cardData.name)
        if (previousName != card.name) {
            // console.log(card.imageUrl)
            const cardListItem = document.createElement('div')
            // const newText = document.createTextNode(card.name)
            const cardPicture = document.createElement("img")
            // cardListItem.classList.add('buttonAdd')
            const cardButtons = document.createElement("button")
            cardButtons.setAttribute("class", "buttonAdd")
            cardButtons.textContent = "+"
            const imglink = card.imageUrl
            cardPicture.setAttribute("src", imglink)
            // cardListItem.appendChild(newText)
            cardListItem.appendChild(cardPicture)
            cardListItem.appendChild(cardButtons)
            cardListItem.classList.add('card')

            // const currentDiv = document.getElementById("End");

            document.getElementById("CardPanel").appendChild(cardListItem)
            // document.body.appendChild(cardListItem)
            // document.body.insertBefore(cardListItem,currentDiv)
        }
        previousName = card.name
        // console.log(previousName)
    }
}


