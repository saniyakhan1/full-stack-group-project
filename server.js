const express=require("express")
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

const port =4000;

app.get("/saniya",(req,res)=>{
  res.render('saniy');
})

const people=[
  {name:"Nabeel",surname:"Khan"},
  {name:"Saniya",surname:"Khan"}
]

app.get("/people",(req,res)=>{
  res.json(people)
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
