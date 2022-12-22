const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
const port = 4000;

const fs = require('fs');

const saniyaData = JSON.parse(fs.readFileSync('./data/saniya.json'));
// let student = JSON.parse(rawdata);
console.log(saniyaData);

app.get('/saniya', (req, res) => {
  res.render('saniya');
});

const people = [
  { userName: 'Nabeel', name: 'Nabeel', surname: 'Khan', introText: 'Hi the name is Khan Nabeel Khan.' },
  saniyaData,
];

app.get('/api/profiles/:name', (req, res) => {
  const found = people.find((element) => element.userName.toLowerCase() == req.params.name.toLowerCase());
  console.log('FOUND IS', found);
  if (found != undefined) {
    console.log('in the if');

    return res.send(found);
  }
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
