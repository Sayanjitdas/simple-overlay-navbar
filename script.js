//breadcrumb button animation
let icon = document.getElementById('icon-frame');
let lineOne = document.getElementById('line1');
let lineThree = document.getElementById('line3');

icon.addEventListener('click',function(){
     lineOne.classList.toggle('line1-crossed');
     lineThree.classList.toggle('line3-crossed');
     lineOne.classList.toggle('line1');
     lineThree.classList.toggle('line3');
})