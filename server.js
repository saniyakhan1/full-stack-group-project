const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
const port = 4000;

// Front-End Endpoints
app.get('/saniya', (req, res) => {
  res.render('saniya');
});
app.get('/nabeel', (req, res) => {
  res.render('nabeel.ejs');
});
app.get('/abrar', (req, res) => {
  res.render('abrar.ejs');
});
app.get('/asad', (req, res) => {
  res.render('asad.ejs');
});
app.get('/fozia', (req, res) => {
  res.render('fozia.ejs');
});
app.get('/nimra', (req, res) => {
  res.render('nimra.ejs');
});
app.get('/', (req, res) => {
  res.render('index.ejs');
});

const retrieveData = () => {
  const allFiles = fs.readdirSync('./data');
  return allFiles.map((element) => {
    return JSON.parse(fs.readFileSync(`./data/${element}`));
  });
};

// Backend Endpoints
app.get('/api/profiles/:name', (req, res) => {
  const data = retrieveData();
  console.log('DATA ISSSSS ', data);
  const userDataFound = data.find(
    (element) => element.userName && element.userName.toLowerCase() === req.params.name.toLowerCase()
  );
  if (userDataFound != undefined) {
    return res.send(userDataFound);
  } else {
    return res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
