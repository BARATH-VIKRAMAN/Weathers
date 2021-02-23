// if(process.env.NODE_ENV !== 'production'){
//   require('dotenv').config()
// }


// const OpenWeatherAPI = process.env.OpenWeatherAPI;

const express = require("express")
const app = express();
const axios = require("axios")
const https = require("https")

app.use(express.json());
app.use(express.static('public'))





app.post("/weather",(req,res) => {
  const lat = req.body.latitude
  const lon = req.body.longitude
  apikey = "da850e9fec96c00e426c5a8548b4c2cf"
  unit = "metric"
const url = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=" + apikey + "&units=" + unit
 // console.log(req.body);

 axios({
   url: url,
   responseType: 'json'
 }).then(data => res.json(data.data.current))
})

// https.get(url,function(response){
//   response.on("data",function(data){
//     const weatherData = JSON.parse(data)
//     const all = weatherData.current;
//   })
// })

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started and running at port 3000");
})
