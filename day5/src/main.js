// const notesElement = document.querySelector(".notes-container");
// const createNoteBtn = document.querySelector("button");
// let notes = document.querySelectorAll(".input-box");

// function showNotes(){
//   notesElement.innerHTML = localStorage.getItem("notes");
// };
// showNotes();

// createNoteBtn.addEventListener('click', createNote);

// function createNote() {
//   let inputBox = document.createElement('p');
//   let img = document.createElement('img');
//   inputBox.className = 'input-box';
//   inputBox.setAttribute("contenteditable", "true");
//   img.src = "trash.svg";
//   return notesElement.appendChild(inputBox).appendChild(img);
// }

// notesElement.addEventListener('click', deleteNote);

// function deleteNote(e) {
//   if (e.target.tagName === "IMG") {
//     return e.target.parentElement.remove();
//     updateStorage();
//   } else if(e.target.tagName === 'p') {
//     notes = document.querySelectorAll(".input-box");
//     notes.forEach(nt =>{
//       nt.onkeyup = function(){
//         updateStorage();
//       }
//     });

//   }
// }

// function updateStorage(){
//   localStorage.setItem("notes", notesElement.innerHTML)
// }

const notesElement = document.querySelector(".notes-container");
const createNoteBtn = document.querySelector("button");

function showNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notesElement.innerHTML = notes.map(note => `<p class="input-box" contenteditable="true">${note}<img src="trash.svg"></p>`).join('');
};
showNotes();

createNoteBtn.addEventListener('click', createNote);

function createNote() {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute("contenteditable", "true");
  img.src = "trash.svg";
  notesElement.appendChild(inputBox).appendChild(img);
  updateStorage();
}

notesElement.addEventListener('click', deleteNote);

function deleteNote(e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
}

function updateStorage() {
  const notes = Array.from(notesElement.querySelectorAll(".input-box")).map(note => note.innerText);
  localStorage.setItem("notes", JSON.stringify(notes));
}

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})