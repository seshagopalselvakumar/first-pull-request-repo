// Render Elements From Array

// let ul = document.querySelector('ul');
// var arr = ["Mohan", "Kumar", "Random", "People", "Object", "Person"];
// let input = document.querySelector("#add");
// let submit = document.querySelector('#submit');

// let listItems = "";
// /*arr.forEach(i => {
//     console.log(i);
//     li.innerHTML = arr;
// }); */
// for (let index = 0; index < arr.length; index++) {
//     let element = arr[index];
//     listItems += `<li>${ element }</li>`;
// }

// ul.innerHTML = listItems;

/* Color change on click */

// gridBtn.addEventListener('click', addGrid);
// function addGrid() {
//     gridContainer.innerHTML += `<div class="grid"></div>`
// }

// for (let index = 0; index < grid.length; index++) {
//     grid[index].addEventListener('click', () => {
//         grid[index].style.backgroundColor = 'red';
//     })
// }


/* Battery Charging Status API */

/* navigator.getBattery().then(function (battery) {
    if (battery.charging) {
        console.log("Battery is charging");
    } else {
        console.log("Battery is discharging");
    }
}); */

// GRID GENERATOR

// let gridBtn = document.querySelector('.btn');
// let gridContainer = document.querySelector('.grid-container');
// let grid = document.querySelectorAll('.grid');

// let r = Math.round(Math.random() * 255) ;
// let g = Math.round(Math.random() * 255) ;
// let b = Math.round(Math.random() * 255) ;

// grid.forEach(grid => {
//     grid.addEventListener('mouseover', ()=> {
//         grid.style.backgroundColor = `rgb(${r},${g},${b})`;
//         grid.style.cursor = `pointer`;
//     })
//     grid.addEventListener('mouseout', ()=> {
//         grid.style.backgroundColor = '';
//     })
// });

// Gradient

let body = document.querySelector('body');
let generateBtn = document.querySelector('.generate');
let gradientValues = document.querySelector('.gradient-values');

generateBtn.addEventListener('click', refresh)

function refresh() {
    let r1 = Math.round(Math.random() * 255);
    let g1 = Math.round(Math.random() * 255);
    let b1 = Math.round(Math.random() * 255);
    let r2 = Math.round(Math.random() * 255);
    let g2 = Math.round(Math.random() * 255);
    let b2 = Math.round(Math.random() * 255);
    let dir = ['to left', 'to right', 'to top', 'to bottom'];
    let index = Math.floor(Math.round(Math.random() * 3));
    body.style.backgroundImage = `linear-gradient(${dir[index]},rgb(${r1},${g1},${b1}),rgb(${r2},${g2},${b2}))`;
    gradientValues.innerHTML = `<code>linear-gradient(${dir[index]},rgb(${r1},${g1},${b1}),rgb(${r2},${g2},${b2}))</code>`;
}

refresh();

