// aos
AOS.init();

// ham menu

let hamIcon=document.getElementById('hamIcon');
let menu=document.querySelector('header ul');

hamIcon.addEventListener('click',function () {
    menu.classList.toggle('active');
})