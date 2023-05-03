const express = require('express');
const cors = require('cors');
const app = express();
const axios =require('axios')

const PORT = 5000;
const bodyParser = require('body-parser');
app.listen(5000);
app.use(bodyParser.json());
app.use(cors());
app.post('/getitems', async (req, res) => {
    console.log(req.body)
    let items =[];
    items = await axios.get("https://api.wazirx.com/api/v2/tickers")
    const keys = Object.keys(items.data);
    const values=Object.values(items.data);

    let result=[];
    let count=0

    for(i in values){
        // console.log("yes")
        // console.log(values[i])
        if (values[i].base_unit === req.body.base_unit && values[i].quote_unit === req.body.quote_unit && count<10){
            result.push(values[i]);
            console.log(values[i]);
            // console.log(count)
            count=count+1;
        }

    }
    // console.log(result);
    res.send(result);

    // res.sendStatus(200)
})