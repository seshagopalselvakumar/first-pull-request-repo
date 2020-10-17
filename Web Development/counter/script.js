var number = document.querySelector('#number');
var addBtn = document.querySelector('#add');
var minusBtn = document.querySelector('#minus');
var body = document.querySelector('body');

var input = 0;

addBtn.addEventListener('click', ()=>{
    input += 1;
    number.innerHTML = input;
    body.style.backgroundColor = '#337c20';
    if(input >= 0){
        body.style.backgroundColor = '#337c20';
    }else if(input <= 0){
        body.style.backgroundColor = '#cf1b1b';
    }
})

minusBtn.addEventListener('click', ()=>{
    input -= 1;
    number.innerHTML = input;
    body.style.backgroundColor = '#cf1b1b';
    if(input >= 0){
        body.style.backgroundColor = '#337c20';
    }else if(input <= 0){
        body.style.backgroundColor = '#cf1b1b';
    }
})