//breadcrumb button animation
let icon = document.getElementById('icon-frame');
let lineOne = document.getElementById('line1');
let lineThree = document.getElementById('line3');
let navbarFrame = document.getElementById('navbar-overlay-frame');


icon.addEventListener('click',function(){
     navbarFrame.removeAttribute('style');
     lineOne.classList.toggle('line1-crossed');
     lineThree.classList.toggle('line3-crossed');
     lineOne.classList.toggle('line1');
     lineThree.classList.toggle('line3');
     navbarFrame.classList.toggle('scale-out-tr');
     navbarFrame.classList.toggle('scale-in-tr');
   
})

