"use strict";
import Yorumlar from "./data.js";

// Bilgilere erişelim
const foto = document.getElementById("kisi-resim");
const yazar = document.getElementById("yazar");
const is = document.getElementById("meslek");
const aciklama = document.getElementById("aciklama");

// Butonlara eriselim
const ileriBtn = document.querySelector(".ileri-btn");
const geriBtn = document.querySelector(".geri-btn");
const rasgeleBtn = document.querySelector(".rasgele-btn");

let index = 0;

const kisiyiGöster = function (index) {
    const kisi = Yorumlar[index];
    const{ad,meslek,yorum,resim} = kisi;
    console.log(resim);

    foto.src = resim;
    yazar.textContent = ad;
    is.innerHTML = meslek;
    aciklama.textContent = yorum;
};

kisiyiGöster(index);

ileriBtn.onclick = function(){
    index++;
    if(index>Yorumlar.length - 1){
        index=0;
    }
    kisiyiGöster(index);
};

geriBtn.onclick = function(){
    index--;
    
    if (index < 0) {
      index = Yorumlar.length - 1;
    }
    kisiyiGöster(index);
};

rasgeleBtn.onclick = function(){
    index = Math.floor(Math.random()*Yorumlar.length);
    kisiyiGöster(index);
};

