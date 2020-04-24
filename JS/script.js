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

//CAROUSEL

const aboutSlide = document.querySelector('.about-slide');
const aboutPics = document.querySelectorAll('.about-slide img')

//BUTTONS

