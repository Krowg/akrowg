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

function myFunction(x) {
  x.classList.toggle("change");
}

// $(window).load(function () {
//     var in_view = new Waypoint.Inview({
//         element: $('#myelement')[0],
//         enter: function() {
//             $('#myelement').addClass('start');
//         },
//         exit: function() {  // optionally
//             $('#myelement').removeClass('start');
//         }
//     });
// });
