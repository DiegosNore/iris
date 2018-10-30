var myvideo = document.getElementById('myvideo');

//Creo el select para ir guardando los tags
var sel = document.createElement("select");
sel.name = "seltags";
sel.id = "sel";
var t = document.createTextNode("Select tag");
sel.appendChild(t);
//Los arreglos son para guardar el tag y el tiempo
//Para luego mostrarlos en forma de bitacora al final
var artag = [];
var artime = [];
var contador = 0;
//Este es el metodo para cuando se presiona el boton tag
create.addEventListener("click", function() {
  myvideo.pause();
  var time = myvideo.currentTime;
  //t = document.createTextNode("")
  var option = document.createElement("option");
  option.value = time;
  var tmp = document.getElementById("selcomp"),
    tmp1 = document.getElementById("seltarg"),
    tmp2 = document.getElementById("selleng"),
    tmp3 = document.getElementById("selot");
  if (tmp.options[tmp.selectedIndex].value != 0) {
    option.text = String(tmp.options[tmp.selectedIndex].value) + ":" + String(time);
    sel.appendChild(option);
    document.getElementsByClassName("tag")[0].appendChild(sel);
    artag.push(String(tmp.options[tmp.selectedIndex].value));
    artime.push(time);
    tmp.selectedIndex = 0;
  } else if (tmp1.options[tmp1.selectedIndex].value != 0) {
    option.text = String(tmp1.options[tmp1.selectedIndex].value) + ":" + String(time);
    sel.appendChild(option);
    document.getElementsByClassName("tag")[0].appendChild(sel);
    artag.push(String(tmp1.options[tmp1.selectedIndex].value));
    artime.push(time);
    tmp1.selectedIndex = 0;
  } else if (tmp2.options[tmp2.selectedIndex].value != 0) {
    option.text = String(tmp2.options[tmp2.selectedIndex].value) + ":" + String(time);
    sel.appendChild(option);
    document.getElementsByClassName("tag")[0].appendChild(sel);
    artag.push(String(tmp2.options[tmp2.selectedIndex].value));
    artime.push(time);
    tmp2.selectedIndex = 0;
  } else if (tmp3.options[tmp3.selectedIndex].value != 0) {
    option.text = String(tmp3.options[tmp3.selectedIndex].value) + ":" + String(time);
    sel.appendChild(option);
    document.getElementsByClassName("tag")[0].appendChild(sel);
    artag.push(String(tmp3.options[tmp3.selectedIndex].value));
    artime.push(time);
    tmp3.selectedIndex = 0;
  }
});

ir.addEventListener("click", function() {
  myvideo.play();
  myvideo.pause();
  myvideo.currentTime = document.getElementById("sel").value;
});

window.onload = function() {
  if (artag.legth == 0 && artime.length == 0) {

  } else {

  }
};

bitacora.addEventListener("click", function() {
  window.location.reload();
});
// visualización de emociones
var mydata = JSON.parse(porcentaje);
window.print(mydata);
