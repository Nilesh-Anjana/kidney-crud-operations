const express = require("express");
const app = express();

// Array of object
const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false
      }
    ]
  }
];

//middleware
app.use(express.json());   // for posting json in body from post request

app.get("/", function (req, res) {
  const johnK = users[0].kidneys;
  const NoK = johnK.length; // Number of kidneys
  let NHK = 0; // Number of healthy kidneys

  for (let i = 0; i < johnK.length; i++) {
    if (johnK[i].healthy) {
      NHK = NHK + 1;
    }
  }

  const NUH = NoK - NHK; // Number of unhealthy kidneys

  res.json({
    NoK,
    NHK,
    NUH // Corrected variable name
  });
});

app.post("/",function(req,res)
{
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg : "done" 
  })
})

app.put("/",function(req,res)
{
  for(let i= 0; i<users[0].kidneys.length;i++)
  {
    users[0].kidneys[i].healthy= true;
  }
})

//removing all unhealthy kidenys
app.delete("/",function(req,res)
{
   if(isthereAtleatOneUnhealthyKidney()){
    const newkidenys = [];
    for(let i =0; i<users[0].kidneys.length; i++)
    {
      if(user[0].kidneys[i].healthy){
        newkidenys.push({
          healthy : true
        })
      }
    }
    users[0].kidneys = newkidenys;
    req.json({
      msg : "done"
    })
   }
   else{
    res.status(411).json({
      msg : "you have no bad kidneys"
    })
   }
})

function isthereAtleatOneUnhealthyKidney(){
  let atleastOneunhealthykidney = false;
  for(let i = 0; i<users[0].kidneys.length; i++)
  {
    if(!users[0].kidneys[i].healthy)
    {
      atleastOneunhealthykidney = true;
    }
  }
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
