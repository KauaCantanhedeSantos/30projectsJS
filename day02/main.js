// Puxa o input do html e atribui ele para uma constante
const inputBox = document.getElementById("input-box");
// Puxa o container de lista para que possa ser manipulado depois de atribuido a uma constante
const listContainer = document.getElementById("list-container");

// Cria a uma função onde vai adicionar uma task/tarefa na tela do usuario
function addTask() {
  // condição de execulção do bloco de codigo, onde caso o input esteja vazio ele retona com uma memnsagem falando para inserir algum valor
  if(inputBox.value === ""){
    // insere um valor dentro dentro do container, no caso um texto dentro de h2
    listContainer.innerHTML = "<h2>Insira algum valor</h2>";
  } else {
    // cria um elemento li
    let li = document.createElement("li");
    // insere um valor dentro de li
    li.innerHTML = inputBox.value;
    // adiciona o li dentro do container no html
    listContainer.appendChild(li);
    //cria um elemento span
    let span = document.createElement("span")
    //adiciona um elemento sendo ele o x
    span.innerHTML = "\u00d7";
    // adiciona o elemento span dentro do li no html
    li.appendChild(span);
  }
  // Após uma das condições serem execultadas vai limpar o campo de input
  inputBox.value = "";
  // chama a função de salvar data/dado a lista/items da lista
  saveData();
};

// chama um evento no elemento listcontainer ppor meio do click
listContainer.addEventListener('click', (e) => {
  // condição do evento
  if(e.target.tagName === "li"){
    // se a condição for satisfeita vai aplicar a classe checked no elemento, condição essa, para ser aplicada, o elemento clicado tem que ser o li
    e.target.classList.toggle("checked");
    // chama a função de salvar data
    saveData();
  } 
  // outra condição do eventi
  else if(e.target.tagName === "span"){
    // remove o elemento li caso o elemento clicaco dentro do html seja o span
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// Função para salvar os elementos da lista caso dê um refresh na pagina
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
};

// função para ver as task, não entendi muito bem
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
};