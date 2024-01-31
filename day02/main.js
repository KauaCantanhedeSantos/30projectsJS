const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value === ""){
    listContainer.innerHTML = "<h2>Insira algum valor</h2>";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener('click', (e) => {
  if(e.target.tagName === "li"){
    e.target.classlist.toggle("checked");
    saveData();
  } else if(e.target.tagName === "span"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
};