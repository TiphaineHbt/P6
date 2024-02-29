const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let dot1 = document.createElement("div")
let parentDot1 = document.querySelector(".dots");
parentDot1.appendChild(dot1);
dot1.classList.add("dot");
dot1.classList.add("dot_selected");

let dot2 = document.createElement("div")
let parentDot2 = document.querySelector(".dots");
parentDot2.appendChild(dot2);
dot2.classList.add("dot")

let dot3 = document.createElement("div")
let parentDot3 = document.querySelector(".dots");
parentDot3.appendChild(dot3);
dot3.classList.add("dot")

let dot4 = document.createElement("div")
let parentDot4 = document.querySelector(".dots");
parentDot4.appendChild(dot4);
dot4.classList.add("dot")

let arrow_left = document.getElementById("arrow_left")
    console.log(arrow_left)

let arrow_right = document.getElementById("arrow_right")
    console.log(arrow_right)

let i = 0

arrow_left.addEventListener("click", () => {
    console.log("J'ai cliqué sur la flèche gauche")

    let dot1 = document.querySelector(".dot_selected")
    dot1.classList.remove("dot_selected")
    dot1.classList.add("dot")

    let dots = document.querySelectorAll(".dot")
        console.log(dots)
        if(i===0){
            i=3
        }
        else(i--)
    dots[i].classList.add("dot_selected")

    let banner = document.querySelector(".banner-img")
    banner.src = "assets/images/slideshow/"+slides[i].image
        console.log(slides[i].image)

    let text = document.querySelector("#banner p")
    text.innerHTML = slides[i].tagLine;
        console.log(text)
})

arrow_right.addEventListener("click", () => {
    console.log("J'ai cliqué sur la flèche droite")
    let dot1 = document.querySelector(".dot_selected")
    dot1.classList.remove("dot_selected")
    dot1.classList.add("dot")

    let dots = document.querySelectorAll(".dot")
        console.log(dots)
        if(i===3){
            i=0
        }
        else(i++)
    dots[i].classList.add("dot_selected")

    let banner = document.querySelector(".banner-img")
    banner.src = "assets/images/slideshow/"+slides[i].image
        console.log(slides[i].image)

    let text = document.querySelector("#banner p")
    text.innerHTML = slides[i].tagLine;
        console.log(text)
})




