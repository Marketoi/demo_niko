var express = require('express');
var app = express();
// var fs = require("fs");
// var bodyParser = require('body-parser');
const HTMLToPDF = require('html5-to-pdf')
const body = "<html><body><h1>Hi Niko!</h1><p>How are you?</p></body></html>"
// var jsonParser = bodyParser.json()

app.get('/api', function (req, res) {
   const htmlToPDF = new HTMLToPDF({
     inputBody: body,
     outputPath: 'file/output.pdf',
   })
   htmlToPDF.build((error) => {
     if(error) throw error
   })

   console.log("hi there");
   res.download( "./file/output.pdf" );
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app  at http://%s:%s", host, port)

})
