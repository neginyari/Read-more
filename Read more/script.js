function iFunction() {
    document.getElementById("container").style.transitionDuration = "5s";
    document.getElementById("container").style.transitionDelay = "5s";
}
function myFunction() {
    var pass= document.getElementById("pass");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");
  
    if (pass.style.display == "none") {
      pass.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      pass.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  function nFunction() {
    var pass2= document.getElementById("pass2");
    var moreText1 = document.getElementById("more2");
    var btnText1= document.getElementById("btn2");
  
    if (pass2.style.display == "none") {
      pass2.style.display = "inline";
      btnText1.innerHTML = "Read more"; 
      moreText1.style.display = "none";
    } else {
      pass2.style.display = "none";
      btnText1.innerHTML = "Read less"; 
      moreText1.style.display = "inline";
    }
  }