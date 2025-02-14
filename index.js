const express = require("express")

const app = express();

function printsq(n)
{
   n = n*n;
    return n;
}

app.get("/",function(req,res)  //request,response
{
   const n = req.query.n;
   const ans = printsq(n);
res.send(ans.toString());

})




//Array of object
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


app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
