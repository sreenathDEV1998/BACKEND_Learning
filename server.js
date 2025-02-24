const express = require('express');
const bodyPrser = require('body-parser');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin : "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyPrser.json());
app.use(bodyPrser.urlencoded({ extended : true }));

app.get("/",(req, res)=>{
    console.log(res,req)
    res.json({ message: "Welcome to esparkinfo application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});