const input = document.querySelector("input");
/*
input.addEventListener("input",function(eve){
  console.log(eve.target.value);
});
*/


const addToDoButton = document.querySelector("#add-todo-btn");
addToDoButton.addEventListener("click",function(){

  const ul = document.querySelector(".todo-list-area");

  const li = document.createElement("li");
  li.classList.add("todo-list");

  const p = document.createElement("p");
  p.textContent = input.value;

  const compButton = document.createElement("button");
  compButton.textContent = "完了";
  compButton.addEventListener("click",()=>{

  });

  const delButton = document.createElement("button");
  delButton.textContent = "削除";
  delButton.addEventListener("click",()=>{
    const parent = delButton.parentNode;
    li.remove(parent);
  });

  li.append(p);
  li.append(compButton);
  li.append(delButton);
  ul.append(li);
});




/*
  <li class="todo-list">
    <p>Todo1</p>
    <button>完了</button>
    <button>削除</button>
  </li>
*/

/*
let s = [1, 2, 3];
s.forEach(function (item) {
  console.log(item);
});
for(let item of s){
  console.log(item);
}


let obj = {
  name: "test",
  age: 12,
  sex: "male",
  job: "police"
};

for (let key in obj) {
  console.log(key, obj[key]);
}

let arr = [1, 2, 3, 4, 5];
let newArry = [];
arr.forEach((num) => {
  if (num % 2 === 0) {
    newArry.push(num);
  }
});
let newArryMap = arr.map((num) => {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(newArryMap);
*/