// aos
AOS.init();

// ham menu

let hamIcon=document.getElementById('hamIcon');
let closeIcon=document.getElementById('closeIcon');
let menu=document.querySelector('header ul');

hamIcon.addEventListener('click',function () {
    menu.classList.add('active');
    overlay.classList.add('active');
    closeIcon.style.display='block';
    hamIcon.style.display='none';
})
closeIcon.addEventListener('click',function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    closeIcon.style.display='none';
    hamIcon.style.display='block';
})
overlay.addEventListener('click',function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    closeIcon.style.display='none';
    hamIcon.style.display='block';
})