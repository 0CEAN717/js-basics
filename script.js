// const element = document.getElementsByClassName('card-title')

// console.log(element[1].children[0]);

// const small = element[1].children[0];

// element[1].innerHTML = '$20 ';

// element[1].appendChild(small);


// Array.from(element).map(el => {
//     const priceVal = parseInt(el.textContent.replace(/[^0-9]/g,''));
//     if (priceVal === 15) {
//         const small = el.children[0];
//         el.innerHTML = '$20 ';
//         el.appendChild(small);
//     }
// });

// for (el of element) {
//     console.log(el);
// }

const prices = document.getElementsByClassName('price')

for (price of prices) {
    if (price.innerText === '$15') {
        price.innerText = "$20"
    }
}