var modal = document.getElementById("myModal");


var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var contactbtn = document.getElementById("contactme")
contactbtn.onclick = function(){
  modal.style.display = "block";
  modalImg.src = myImg.src;
}


var span = document.getElementsByClassName("close")[0];

modal.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

var changeimgbtn = document.getElementById("rimgchanger");
changeimgbtn.onclick = function(){
  location.reload();
}

