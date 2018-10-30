var sys = require('sys');
var exec = require('child_process').exec;
var child;


exec("python3 getframeaws.py pruebaupload/public/uploads/video.mp4", function(error,stdo,stder){
sys.print(stdo);
sys.print(stder);
});
