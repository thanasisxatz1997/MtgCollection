const express = require("express")
const cors = require("cors")
const app = express()
const MongoDb = require("mongodb").MongoClient
app.use(cors())

const client = new MongoDb("mongodb+srv://thanasisxatz1997:freeewebb199714@cluster0.odnzivn.mongodb.net/?retryWrites=true&w=majority")


const dataBase = async () => {
    try {
        await client.connect()
        console.log("Done")
    } catch (error) {
        console.log(error)
    }
}

app.get("/collections", async (req, res) => {
    const db = client.db("MtgCollection");
    const collections = await db.listCollections().toArray()
    console.log(collections)
    res.send(collections)
})

app.get("/cards", async (req, res) => {
    const mtg = require('mtgsdk')
    // mtg.card.all({ set:'AKR'})
    //     .on('data',function (card) {
    //         //console.log(card)
    //         //console.log("i= "+i)
    //     });

        mtg.card.where({ set:'AKR',colors:'R'})
        .then(cards => {
            //console.log(cards)
            res.send(cards)
        })
        // for(i=0;i<result.cardArr.length;i++)
        // {
        //     console.log("RESULT NUM "+i+" : "+result.cardArr[i])
        // }
        // console.log("CARD ARRAY IS"+result.cardArr)
        // res.send(result.cardArr)

    // mtg.card.all({ set:'BRO',colors: 'red,white' })
    //     .on('data', function (card) {
    //         console.log(card.name)
    //         res.send(card.name)
    //     });
})

app.get("/cardsAKRW", async (req, res) => {
    const mtg = require('mtgsdk')
        mtg.card.where({ set:'DMU',colors:'W'})
        .then(cards => {
            res.send(cards)
        })
})
app.get("/cardsAKRU", async (req, res) => {
    const mtg = require('mtgsdk')
        mtg.card.where({ set:'DMU',colors:'U'})
        .then(cards => {
            res.send(cards)
        })
})
app.get("/cardsAKRB", async (req, res) => {
    const mtg = require('mtgsdk')
        mtg.card.where({ set:'DMU',colors:'B'})
        .then(cards => {
            res.send(cards)
        })
})
app.get("/cardsAKRR", async (req, res) => {
    const mtg = require('mtgsdk')
        mtg.card.where({ set:'DMU',colors:'R'})
        .then(cards => {
            res.send(cards)
        })
})
app.get("/cardsAKRG", async (req, res) => {
    const mtg = require('mtgsdk')
        mtg.card.where({ set:'DMU',colors:'G'})
        .then(cards => {
            res.send(cards)
        })
})


app.listen(4000, () => { console.log("Server is running!") })