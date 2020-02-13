/*************************************************************/
var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function carousel(){
    plusDivs(1)
    setTimeout(carousel, 10000);
    // clearTimeout();
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
}

carousel();
/*************************************************************/
function menuBtn(x) {
    x.classList.toggle("change");
}
/*************************************************************/