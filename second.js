
let homeEl=document.getElementById('home-points')
let count=0
function plusone(){
    count += 1
    homeEl.textContent =count
}
function plustwo(){
    count += 2
    homeEl.textContent =count
}
function plusthree(){
    count += 3
    homeEl.textContent =count
}
let minushEl=document.getElementById('home-points')
function minusone(){
    count -= 1
    homeEl.textContent =count
}
function minustwo(){
    count -= 2
    homeEl.textContent =count
}
function minusthree(){
    count -= 3
    homeEl.textContent =count
}

let awayEl=document.getElementById('away-points')
let count2=0
function plusonet(){
    count2 += 1
    awayEl.textContent =count2
}
function plustwot(){
   count2 += 2
    awayEl.textContent =count2
}
function plusthreet(){
    count2 += 3
    awayEl.textContent =count2
}
let minusgEl=document.getElementById('away-points')
function minusonet(){
    count2 -= 1
    awayEl.textContent =count2
}
function minustwot(){
    count2 -= 2
    awayEl.textContent =count2
}
function minusthreet(){
    count2 -= 3
    awayEl.textContent =count2
}