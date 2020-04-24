//Typing Effect

let i, text;

i = 0;
text = "Make Memories in japan";

function typing() {
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}

typing();

// //----------------------CAROUSEL...........................

 const aboutSlide = document.querySelector('.about-slide');
 const slideBtn = document.querySelectorAll('.btn');

const numberOfImages = document.querySelectorAll('.about-slide img').length;
let counter = 1;
let translateX = 0;








// const aboutSlide = document.querySelector('.about-slide');
// const aboutPics = document.querySelectorAll('.about-slide img');

// const leftBtn = document.querySelector('#left-btn');
// const rightBtn = document.querySelector('#right-btn');

// let counter = 1;
// const size = aboutPics[1].clientWidth;

// aboutSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// rightBtn.addEventListener('click', ()=>{
//     aboutSlide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     aboutSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// leftBtn.addEventListener('click', ()=>{
//     aboutSlide.style.transition = "transform 0.4s ease-in-out";
//     counter--;
//     aboutSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });

// aboutSlide.addEventListener('transitioned', ()=>{
//     if (aboutPics[counter].id === 'lastcopy') {
//     aboutSlide.style.transition = "none";
//     counter = aboutPics.length -2;
//     aboutSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// });
