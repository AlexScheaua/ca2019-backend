const express = require('express');
const path = require('path');
const MongoClient = require('mongodb')
const bodyParser = require('body-parser');
const cors = require('cors');
const HtmlResponse = require('./src/htmlResponse');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: false }));
const mongoUrl = 'mongodb+srv://general:general@cluster0-yu4bb.mongodb.net/test?retryWrites=true&w=majority'

MongoClient.connect(mongoUrl, {
  useNewUrlParser: true
}, (err, db) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }

  let database = db.db('root');
  database.createCollection('formfeedback', (err, result) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }

    db.close();
  });
  database.createCollection('formincident', (err) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    db.close();
  });
});

//Allow cors
app.use(cors());
app.options('*', cors());

app.get('/api/hospitallist', (req, res) => {
  let hList = require('./src/listaSpitale.json');
  res.status(200).send(hList);
})

let successResponse = fs.readFileSync(__dirname + '/src/html/successResponse.html', 'utf8');
let errorResponse = fs.readFileSync(__dirname + '/src/html/errorResponse.html', 'utf8');

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

app.post('/api/form/1', (req, res) => {

  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, (err, db) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    var database = db.db('root');
    var collection = database.collection('formfeedback');
    collection.insertMany([req.body], (err, result) => {
      if (err) {
        res.send(errorResponse);
        process.exit(0);
      }
      res.send(successResponse);
      db.close();
    });
  });
});

app.post('/api/form/2', (req, res) => {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, (err, db) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    var database = db.db('root');
    var collection = database.collection('formincident');
    collection.insertMany([req.body], (err, result) => {
      if (err) {
        res.send(errorResponse);
        process.exit(0);
      }
      res.send(successResponse);
      db.close();
    });
  });
});

app.get('/api/raport', (req, res) => {
  MongoClient.connect(mongoUrl, {
    useNewUrlParser: true
  }, (err, db) => {
    if (err) {
      console.log(err);
      process.exit(0);
    }
    var database = db.db('root');
    var collection = database.collection('formfeedback');

    collection.find({}, {
      projection: {
        etapa_eveniment: true
      }
    }).toArray((err, result) => {
      res.send(result);
    })

    db.close();
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port: ${port}`));