var express = require('express');
var app = express();
var sys = require('sys');
var exec = require('child_process').exec;
var child;

app.get('/', function (req, res) {

  analisis();
  console.log("esta mierda no analisa");
  res.send('Hello World!');
});

app.get('/tags', (req,res)=>{
  analisis();
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});

function analisis(){
  exec("python3 ../../getframeaws.py ../public/uploads/video.mp4", function(error,stdo,stder){
  sys.print(stdo);
  sys.print(stder);
});
}
