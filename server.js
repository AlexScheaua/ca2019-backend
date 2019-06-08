const express = require('express');
const mongoose = require('mongoose');
const app = express();

// mongoose.connect('mongodb+srv://general:general@cluster0-yu4bb.mongodb.net/test?retryWrites=true&w=majority')

app.use(express.json());

//Allow cors
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.get('/api/hospitallist', async (req, res) => {
    let hList = require('./src/listaSpitale.json');
    res.status(200).send(hList);
})

app.get('/api/form/:form', (req, res) => {
    console.log(req.params.form);
    
    if(req.params.form == 1){
        let form = require('./src/form1.json');
        res.status(200).send(form);
    } else {
        let form = require('./src/form2.json');
        res.status(200).send(form);
    }
    
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port: ${port}`));