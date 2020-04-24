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

slideBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.id === 'left-btn') {
            if (counter !==1) {
                counter--;
                translateX +=720;
            }
        } else {
            if (counter !== numberOfImages) {
                counter++;
                translateX -=720;
            }
        }

        aboutSlide.style.transform = `translateX(${translateX}px)`;
        
    });
});

