
let stroageVal = localStorage;
let tbody = document.querySelector("tbody");
for(let i = 0; i<stroageVal.length; i++){
    let key1 = localStorage.key(i);
    let  val1 = localStorage.getItem(key1);
    let newTr = document.createElement('tr');
    let tdkey = document.createElement('td');
    let tdval = document.createElement('td');
    let tdAction = document.createElement('td');
    tdkey.innerHTML = key1;
    tdAction.innerHTML = `<a href="#" class="edit" onClick="editFunction('${key1}')" >Edit</a><a href="#" class="delete"  onClick="deleteElement('${key1}')">Delete</a>`;
    tdval.innerHTML = val1;

        if (val1.toLowerCase() === 'done') {
            tdval.style.color = 'green';
            tdval.style.fontWeight = 'bold';
        }
    
    newTr.appendChild(tdkey);
    newTr.appendChild(tdval);
    newTr.appendChild(tdAction);
    tbody.appendChild(newTr);
    // console.log(key1,val1);
}


function add_Element(){
    let key = document.getElementById('key').value;
    let val = document.getElementById('value').value;
    console.log(key,val);
    localStorage.setItem(key,val);
    window.location.reload();
}

function deleteElement(key){
    console.log(key);
    localStorage.removeItem(key);
    window.location.reload();
}

function editFunction(key){
    let addBtn = document.getElementById('addBtn');
    let keytxt = document.getElementById("key");
    keytxt.value = key;
    let valuetxt = document.getElementById("value");
    valuetxt.value = localStorage.getItem(key);
    addBtn.innerHTML = 'Update';
    let actionLabel = document.getElementById('actionLabel');
    if (!document.getElementById('cancelBtn')) {
    let cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = 'cancel';
    cancelBtn.style.backgroundColor = 'red';
    cancelBtn.style.color = 'white';
    cancelBtn.setAttribute('id',"cancelBtn");
    cancelBtn.setAttribute('onClick',"cancelButton()");
    actionLabel.appendChild(cancelBtn);
    }
}


function cancelButton(){
    window.location.reload();
}