const express = require("express")
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))
app.get('/api/test',(req,res)=>{
    console.log("params:")
    console.log(req.params)
    console.log("body:")
    console.log(req.body)
    console.log("query:")
    console.log(req.query)
    return res.send("ok");
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
  })