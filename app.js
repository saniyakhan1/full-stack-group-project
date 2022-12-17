const express=require("express")
const app=express()

const nabeel=[
  {name: "Nabeel", surname:"Khan"},
]

app.get("/nabeel",(req,res)=>{
  res.json(nabeel)
})





fetch('')
   .then(res=>{
    return res.json();
   })
   .then(data=>{
    data.forEach(user=>{
      const markup=`<li>${user.username}</li>`

      document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
    });
   })
   .catch(error=>console.log(error));