function openFormAssignment3() {
  document.getElementById("myForm").style.display = "block";
  document.getElementsByClassName("open-button")[0].style.display = "none";
  closeFormAssignment4();
}

function closeFormAssignment3() {
  document.getElementById("myForm").style.display = "none";
  document.getElementsByClassName("open-button")[0].style.display = "block";
}

function openFormAssignment4() {
  document.getElementById("myForm1").style.display = "block";
  document.getElementsByClassName("open-button")[1].style.display = "none";
  closeFormAssignment3();
}

function closeFormAssignment4() {
  document.getElementById("myForm1").style.display = "none";
  document.getElementsByClassName("open-button")[1].style.display = "block";
}

function openFormAssignment7() {
  document.getElementById("show-cases").style.display = "block";
  document.getElementsByClassName("open-button")[2].style.display = "none";
  closeFormAssignment3();
}

function closeFormAssignment7() {
  document.getElementById("show-cases").style.display = "none";
  document.getElementsByClassName("open-button")[2].style.display = "block";
}



var menuDiv = document.getElementsByClassName("menu-div")[0];

var menu = null;

function myFunction(x) {
  x.classList.toggle("change");
  menu = x;

  if (menuDiv.style.display === "grid") {
    menuDiv.style.display = "none";
  } else {
    menuDiv.style.display = "grid";
  }
}

document.getElementsByClassName("menu-div")[0].addEventListener("click", function (){
  menuDiv.style.display = "none";
  menu.classList.toggle("change");
});

function slowScrollToTop(duration) {
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Ensure progress does not exceed 1
    const scrollY = startPosition * (1 - progress); // Gradually decrease the scroll position

    window.scrollTo(0, scrollY);

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue scrolling
    }
  }

  requestAnimationFrame(scrollStep);
}

var openBtn = document.getElementById("btn-open");
var closeBtn = document.getElementById("btn-close");
var menuDivBtn = document.getElementsByClassName("menu-div-btn")[0];

openBtn.addEventListener("click", function (){
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  menuDivBtn.style.display = "grid";
  menuDivBtn.style.animation = "0.5s menuDivBtnHeight";
});

closeBtn.addEventListener("click", function (){
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuDivBtn.style.animation = "0.5s menuDivBtnHeightMin";

  setTimeout(function() {
    menuDivBtn.style.display = "none";
  }, 500);
});

menuDivBtn.addEventListener("click", function (){
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  menuDivBtn.style.animation = "0.5s menuDivBtnHeightMin";

  setTimeout(function() {
    menuDivBtn.style.display = "none";
  }, 500);
});

ScrollReveal({
  reset:true,
  distance:'60px',
  duration:2500,
  delay:100
});

ScrollReveal().reveal('.graduation-cap',{
  origin: 'top',
  distance: '200px'
});

ScrollReveal().reveal('.diploma',{
  origin: 'bottom',
  distance: '200px'
});

// assignment change pages
let assignmentCard2 = document.getElementById("assignment-cards-2");
let assignmentCard1 = document.getElementById("assignment-cards-1");
let previousBtn = document.getElementById("btn-previous");
let nextBtn = document.getElementById("btn-next");

assignmentCard2.style.display = "none";

previousBtn.addEventListener("click", function (){
  if (assignmentCard1.style.display === "none") {
    assignmentCard2.style.display = "none";
    assignmentCard1.style.display = "grid";
  }
});

nextBtn.addEventListener("click", function (){
  if (assignmentCard2.style.display === "none") {
    assignmentCard2.style.display = "grid";
    assignmentCard1.style.display = "none";
  }
})

