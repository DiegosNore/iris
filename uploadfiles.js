function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var nom = files[0].name;
  ayuda(nom);
  /*var video = document.getElementById('myvideo');
  var src = document.createElement('source');
  src.setAttribute('src',"../Videos/"+files[0].name,'type','vide/mp4');
  src.setAttribute('type','video/mp4');
  document.getElementById('vid').removeAttribute('src');
  video.appendChild(src);
  location.href=location.href;
  //window.location.refresh();

*/
  // files is a FileList of File objects. List some properties.
  var output = [];
/*  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
      f.size, ' bytes, last modified: ',
      f.lastModifiedDate.toLocaleDateString(), '</li>');
  }*/
  //document.getElementById('list').innerHTML = '<ul>' + output.join('')+'no se pa que es esto' + '</ul>';
}
function ayuda(vid){
  var video = document.getElementById('myvideo');
  var src = document.createElement('source');
  src.setAttribute('src',"../Videos/video.mp4",'type','vide/mp4');
  src.setAttribute('type','video/mp4');
  document.getElementById('vid').removeAttribute('src');
  video.appendChild(src);
  location.href=location.href;
  console.log("done");
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);
window.onload = function(){
  var video = document.getElementById('myvideo');
  var src = document.createElement('source');
  src.setAttribute('src',"../Videos/pruebavid.mp4");
  src.setAttribute('type','video/mp4');
  document.getElementById('vid').removeAttribute('src');
  video.appendChild(src);
  //location.href=location.href;
  console.log("done");

};
