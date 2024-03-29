const express = require("express")
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))
app.post('/api/test',(req,res)=>{
    console.log(req)
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "payload": {
          "google": {
            "expectUserResponse": true,
            "richResponse": {
              "items": [
                {
                  "simpleResponse": {
                    "textToSpeech": "this is a simple response"
                  }
                }
              ]
            }
          }
        }
      }));
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
  })