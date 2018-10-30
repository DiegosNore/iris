const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
//var mongoose = require('mongoose');
const commandLineArgs = require('command-line-args');

var configDB = require('./database.js');

var py = require('python-shell');
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + path.extname(file.originalname));
  }
});
//var promise = mongoose.connect('mongodb://diegosnore:velajuel1103@ds145563.mlab.com:45563/iris', {
//  useMongoClient: true,
  /* other options */
//}); // connect to our database
//init upload
const upload = multer({
  storage: storage,
  limits:{fileSize: (22*1000000000)},
  fileFilter: function(req, file,cb){
    checkFileType(file,cb);
  }
}).single('video');

//Check Fyle type
function checkFileType(file,cb){
  //Allowed extentions
  const filetype =/mp4/;
  //Check extention
  const extname = filetype.test(path.extname(file.originalname).toLowerCase());
  //check mime
  const mimetype = filetype.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  }else{
    cb('Error: mp4 only')
  }
}

function analizar(req,res){
  //console.log("llegue");
  let options={
    mode:'text',
    pythonPath:'python3',
    scriptPath:'getframeaws.py',
    args:['public/uploads/video.mp4']
  };
  py.PythonShell.run('../Scripts/getframeaws.py',options,function(err, results){
    if(err){
      res.status(500).send({error:err});
      console.log(err);
      return;
    }
    //res.status(200).send({message:'Done'});
    console.log('results:%j',results);
  });
}
//Función para llamar al archivo de python y realizar el analisis


//init app
const app = express();

//ejs
app.set('view engine', 'ejs');

//Public folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.post('/analisis', (req,res)=>{
  let options={
    mode:'text',
    pythonPath:'python3',
    scriptPath:'getframeaws.py',
    args:['public/uploads/video.mp4']
  };
  py.PythonShell.on('message', function(message){
    console.log(message);
  });
  py.PythonShell.run('../Scripts/getframeaws.py',options,function(err, results){
    if(err){
      res.status(500).send({error:err});
      console.log(err);
      return;
    }
    res.status(200).send({message:'Done'});
    console.log('results:%j',results);
  });
  //res.send("done");
});

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error no file selected!'
        });
      }else{
        analizar();
        res.render('index', {
          msg: 'File uploaded',
          file:`uploads/${req.file.filename}`
        });
        app.get()
      }
    }
  });
});

const port = 3000;

app.listen(port, () => console.log(`server started on port ${port}`));
