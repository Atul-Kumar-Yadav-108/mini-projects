// calculator interactive area 

// let equalTo = document.getElementById('equalto');
// let clear = document.getElementById('clearBtn');
// let switchBtn = document.getElementById('switchBtn');
// let oneBtn = document.getElementById('oneBtn');
// let twoBtn = document.getElementById('twoBtn');
// let threeBtn = document.getElementById('threeBtn');
// let fourBtn = document.getElementById('fourBtn');
// let fiveBtn = document.getElementById('fiveBtn');
// let sixBtn = document.getElementById('sixBtn');
// let sevenBtn = document.getElementById('sevenBtn');
// let eightBtn = document.getElementById('eightBtn');
// let nineBtn = document.getElementById('nineBtn');
// let zeroBtn = document.getElementById('zeroBtn');
// let dotBtn = document.getElementById('dotBtn');
// let modBtn = document.getElementById('modBtn');
// let plusBtn = document.getElementById('plusBtn');
// let minusBtn = document.getElementById('minusBtn');
// let subBtn = document.getElementById('mulBtn');
// let divBtn = document.getElementById('divBtn');

let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) =>{
    button.addEventListener('click',(event)=>{
        console.log(event.target.id);
    });
});

// equalTo.addEventListener('click',()=>{
//     console.log('=');
// });