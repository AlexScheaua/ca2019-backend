const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const formFeedback = require('./models/formfeedback');
const formIncident = require('./models/formincident');
const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://general:general@cluster0-yu4bb.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).catch((error)=> {
    console.log(error);
    
})

//Allow cors
app.use(cors());
app.options('*', cors());

app.get('/api/hospitallist', (req, res) => {
    let hList = require('./src/listaSpitale.json');
    res.status(200).send(hList);
})

app.get('/api/form/:form', (req, res) => {
    console.log(req.params.form);

    if (req.params.form == 1) {
        let form = require('./src/form1.json');
        res.status(200).send(form);
    } else if (req.params.form == 2) {
        let form = require('./src/form2.json');
        res.status(200).send(form);
    }

})

app.post('/api/form/:form', (req, res) => {

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port: ${port}`));