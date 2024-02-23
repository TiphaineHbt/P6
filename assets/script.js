
const slides = [
    {
        "image":"./assets/images/slideshow/slide1.jpg", // index = 0
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slideshow/slide2.jpg", // index = 1
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slideshow/slide3.jpg", // index = 2
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"./assets/images/slideshow/slide4.jpg", // index = 3
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let index = 0;

const arrow_right=document.getElementById("arrow_right");
const banner_img=document.getElementById("banner_img");

arrow_right.addEventListener("click", function () {
    console.log(slides[2]);
    console.log(index);

    if (index !== (slides.length -1)) { // si l'index est différent de la longueur de slides (4) - 1 alors j'augmente l'index de 1
        index++; // index = index +1
    } else {
        index = 0;
    }
    banner_img.src = slides[index].image;
});
