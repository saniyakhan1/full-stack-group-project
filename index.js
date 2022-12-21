const express=require("express")
const app = express()

const port =4000

const people=[
  {Name:"Nabeel",Surname:"Khan"},
  {Name:"Saniya",Surname:"Khan"}
]

app.get("/",(req,res)=>{
  res.json(people)
})


app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})
