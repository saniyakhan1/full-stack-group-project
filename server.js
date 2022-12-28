const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
const port = 4000;

// Frontend Endpoints
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/saniya', (req, res) => {
  res.render('saniya');
});
app.get('/nabeel', (req, res) => {
  res.render('nabeel');
});

// Backend Endpoints
app.get('/api/homepage', (req, res) => {
  res.send({ introText: 'some intro text' });
});

app.get('/api/profiles/:name', (req, res) => {
  const userName = req.params.name.toLowerCase();
  const userDataFound = retrieveDataFor(userName);

  if (userDataFound != undefined) {
    res.send(userDataFound);
  } else {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

const retrieveDataFor = (name) => {
  const allFiles = fs.readdirSync('./data');
  const dataFound = allFiles.find((element) => element.includes(name));

  if (dataFound) {
    return JSON.parse(fs.readFileSync(`./data/${dataFound}`));
  } else return undefined;
};

const retrieveAllData = () => {
  const allFiles = fs.readdirSync('./data');
  return allFiles.map((element) => {
    return JSON.parse(fs.readFileSync(`./data/${element}`));
  });
};

module.exports = app;
