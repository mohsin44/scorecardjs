
let countEl = document.getElementById("counter")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count +=  1
    countEl.innerText = count
}
let saveEl = document.getElementById( 'save-el' )
function save() {
    let countStr =count +  " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent =  0
    count =  0
}
