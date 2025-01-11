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

// let buttons = document.querySelectorAll('.btn');
// let displayPanel = document.querySelector('#display-pnl');
// console.log(buttons)
// buttons.forEach((button) =>{
//     button.addEventListener('click',(event)=>{

//         // console.log(event.target.id);
//         if(event.target.innerText == 'C')
//             displayPanel.innerHTML = '';
//         if(event.target.innerText != 'C' && event.target.innerText != 'OFF' && event.target.innerText != 'ON' && event.target.innerText != '=')
//             displayPanel.innerText = displayPanel.innerText + event.target.innerText;

//     });
// });

let switchBtn = document.getElementById('switchBtn');
console.log(switchBtn);
let switchBtnStatus = false;


switchBtn.addEventListener('click',()=>{
    if(switchBtnStatus){
        switchBtn.innerHTML = '<button><h1>OFF</h1></button>';
        Array.from(document.getElementsByClassName('btn')).forEach((item) => {
            item.style.backgroundColor = '#a9a9a9';
            
        });   
        switchBtn.style.cssFloat.backgroundColor = '#FA9696';   
        switchBtnStatus = false;
    }else{
        switchBtn.innerHTML = '<button><h1>ON</h1></button>';
        Array.from(document.getElementsByClassName('btn')).forEach((item) => {
            item.style.backgroundColor = '#72adda';
        });  
        switchBtnStatus = true;
    }

    if(switchBtnStatus){
        let buttons = document.querySelectorAll('.btn');
        let displayPanel = document.querySelector('#display-pnl');
        console.log(buttons)
        buttons.forEach((button) =>{
            button.addEventListener('click',(event)=>{
    
                // console.log(event.target.id);
                if(event.target.innerText == 'C')
                    displayPanel.innerHTML = '';
                if(event.target.innerText != 'C' && event.target.innerText != 'OFF' && event.target.innerText != 'ON' && event.target.innerText != '=')
                    displayPanel.innerText = displayPanel.innerText + event.target.innerText;
    
            });
        });
    }
})


// equalTo.addEventListener('click',()=>{
//     console.log('=');
// });