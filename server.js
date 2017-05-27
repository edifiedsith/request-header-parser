var express=require('express')
var app=express()

app.set('port', (process.env.PORT || 8080))

app.get('/', function (req, res) {
    var headers=req.headers
    var lang=req.get('Accept-Language').split(',')
    var regExp=/\(([^)]+)\)/
    var arr=regExp.exec(req.get('user-agent'))
    var str=arr[0].substring(1,arr[0].length-1)
    res.send({'ipaddress':req.get('x-forwarded-for'),'language':lang[0],'software':str})
})

app.get('/', function (req, res) {
 
})

app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'))
})