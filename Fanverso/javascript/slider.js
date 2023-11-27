var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" fanverso-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " fanverso-white";
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    updateIndicators();
  }
  
  function updateIndicators() {
    var indicators = document.getElementsByClassName("demo");
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("w3-white");
    }
    indicators[slideIndex - 1].classList.add("w3-white");
  }
  