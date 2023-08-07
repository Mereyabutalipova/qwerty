// let elem = document.querySelectorAll('ul')

// console.log(elem)

// for( let i = 0 ; i < elem.lenght ; i++) {
//     elem[i].style.color = 'green'
// }

let elem1 = document.querySelectorAll('ul')

// elem1.style.color = 'green'
for(let i =0 ; i < elem1.length ; i++) {
    elem1[i].style.color = 'green'
}
console.log(elem1)

const popup = (a) => {
    const pop = document.querySelector('.popup').style.display = a
}
 