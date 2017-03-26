var express = require("express")
var app = express()

app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for']
    var lang = req.headers['accept-language'].split(',')[0]
    var os = req.headers['user-agent'].split('(')[1].split(')')[0]
    res.end('{"ip":'+ ip + ',"lang":' + lang + ',"os":' + os + '}')
})

app.listen(8080, function() {
    console.log('Listening on 8080')
})