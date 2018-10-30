var py = require('python-shell');

let options={
  mode:'text',
  pythonPath:'python3',
  scriptPath:'getframeaws.py',
  args:['public/uploads/video.mp4']
};

py.PythonShell.run('../Scripts/getframeaws.py',options,function(err, results){
  if(err)throw err;
  console.log('results:%j',results);
});
