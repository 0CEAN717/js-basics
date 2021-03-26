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



// 1 Zadanie. Zmienić 15$ na 20$ w box'ie z tytułem "Pro"
const prices = document.getElementsByClassName('price');

// for (price of prices) {
// if (price.innerText === '$15') {
//         price.innerText = "$20"
//     }
// }

const callbackTest = function (test, callback) {
    const blach = document.querySelector(test);
    callback(blach)
}

callbackTest('.display-4', function(blach) {
    blach.style.color = '#fff';
})

// 2 Zadanie. Zmienić kolor po najechaniu kursorem "Pircing"
const title = document.querySelector('.display-4');

title.addEventListener('mouseenter', function () {
    console.log(this)
    this.style = 'color: blue'
});

title.addEventListener('mouseleave', function() {
    title.style = 'color: black'
});

// 3 Zadanie. Box cenowy "Free", po naciśnięciu przycisku, za pomocą "prompt()" poprosić o podanie imienia i wyświetlić w konsoli.
const btn = document.getElementById('free');

const titleText = document.getElementsByClassName('my-0 mr-md-auto font-weight-normal');
    console.log(titleText);

btn.addEventListener('click', function() {
    let text = prompt('Pleas enter your name');
    
    const titleText = document.getElementsByClassName('my-0 mr-md-auto font-weight-normal');
});
    

