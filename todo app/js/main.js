var elform =document.querySelector('.js-form');
let elInput =document.querySelector('.js-input');
let ellist = document.querySelector('.js-item');

let alltodo = [];

let onRender = (arr) =>{
    ellist.innerHTML=null;
arr.forEach((item) => {
 
 let elli = document.createElement('li')
 elli.className =' d-flex align-items-center text-center'
 elli.innerHTML =`
     <input class="form-check-input" type="checkbox" >
     <span>${item.text}</span>
     <div class="ms-auto">
     <button type="submit" class="btn btn-outline-primary">delte</button>
     <button type="submit" class="btn btn-outline-primary">edit</button>
     </div>
    `

 ellist.appendChild(elli)
});
}

let onsubmit = (eve) => {
eve.preventDefault();

let inputValue = elInput.value.trim();


 
if (!inputValue) {
  alert("input todo");
}

let newtodo = {
  id: alltodo.length,
  text: inputValue,
  iscompleted: false,
};
 
alltodo.unshift(newtodo);

onRender(alltodo);

elInput.value = null;

elInput.focus();


}
elform.addEventListener('submit', onsubmit);





