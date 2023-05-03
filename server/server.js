const express = require('express');
const cors = require('cors');
const app = express();
const axios =require('axios')
const Cryptoschema=require('./Models/Model')
const mongoose = require('mongoose')

//connect to database
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://viwin:viwin@cluster0.f6id5s2.mongodb.net/test").then(() => { console.log(`succesfully connected to database`) }).catch((err) => { console.log(err) })

const PORT = 5000;
const bodyParser = require('body-parser');
app.listen(5000);
app.use(bodyParser.json());
app.use(cors());

app.post('/getitems', async (req, res) => {
    console.log(req.body)
    await Cryptoschema.deleteMany({})

    let items =[];
    items = await axios.get("https://api.wazirx.com/api/v2/tickers")
    const keys = Object.keys(items.data);
    const values=Object.values(items.data);

    let result=[];
    let return_result=[];

    let count=0

    for(i in values){

        if (values[i].base_unit === req.body.base_unit && values[i].quote_unit === req.body.quote_unit && count<10){
            result.push(values[i]);
            const base=values[i].base_unit
            const quote = values[i].quote_unit
            const low = values[i].low
            const high = values[i].high
            const last = values[i].last
            const type = values[i].type
            const open = values[i].open
            const volume = values[i].volume
            const sell = values[i].sell
            const buy = values[i].buy
            const at = values[i].at
            const name = values[i].name

                const newcrypto = await Cryptoschema.create({ base,quote,low,high,last,type,open,volume,sell,buy,at,name });
                newcrypto.save()
            
            console.log(values[i]);
            // console.log(count)
            count=count+1;
        }

    }
    // console.log(result);
    return_result= await Cryptoschema.find()

    if(return_result){ 
        console.log('result display:')
        console.log(return_result)
        console.log("results")
        console.log(result)
        res.send(return_result) 
    }
    else{
        res.send(result);
    }

    // res.sendStatus(200)
})