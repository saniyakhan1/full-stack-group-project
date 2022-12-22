const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
const port = 4000;

const saniyaData = JSON.parse(fs.readFileSync('./data/saniya.json'));

app.get('/saniya', (req, res) => {
  res.render('saniya');
});

const data = [
  { userName: 'Nabeel', name: 'Nabeel', surname: 'Khan', introText: 'Hi the name is Khan Nabeel Khan.' },
  saniyaData,
];

app.get('/api/profiles/:name', (req, res) => {
  const found = data.find((element) => element.userName.toLowerCase() == req.params.name.toLowerCase());
  if (found != undefined) {
    return res.send(found);
  }
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
