"use strict";
let i=0;
let j=-1;
const imageLarge1 = document.querySelector(".img_tumbnail img");
const imageSmall1 = document.querySelectorAll(".img_small img");
let imgmain = imageLarge1.src;
imgmain = imgmain.slice(0, -4); 

imageSmall1.forEach((img, indx)=> {
    j++;
    img.addEventListener("click", (e) => {
        imageLarge1.src = `${imgmain}${indx}.jpg`;
    });
});
    imageLarge1.addEventListener("click", (e) => {
        i++;
            imageLarge1.src = `${imgmain}${i}.jpg`;
        if(i==j) {i=-1};

    });