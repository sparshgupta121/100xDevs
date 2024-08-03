const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username == "sparsh" && password == "pass") {
    if (kidneyId == 1 || kidneyId == 2) {

        res.json({
            msg: "Your kidney is fine!"
          })
        
      }    

  }

  else{
  res.status(400).json({"msg": "Somethings up with your inputs"})
}
  
  // do something with kidney here
 

  
});

app.listen(3000);