let n = 1;

submit.addEventListener("click", (e) => {
  e.preventDefault()
  let titlec = title.value
  let descc = desc.value
  if (titlec != "" || descc != "") {
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    console.log(e)
    todo.innerHTML += `
  <div class="todo-card" id="todo${n}">
      <h3 class="todo-card-title">${titlec}</h3>
      <span class="todo-card-desc">${descc}</span>
      <button class="btn-card edit" onclick="edit(this)">Edit</button>
      <button class="btn-card del" onclick="deletecard(this)">Delete</button>
    </div>
  `
    n++
    title.value = ""
    desc.value = ""
  }
})

dele.addEventListener("click", (e) => {
  let a = document.getElementById("todo");
  let node = a.childNodes;
  for (let i = 1; i < node.length; i++) {
    node[i].remove();
  }
})

function deletecard(e) {
  let a = e.parentNode;
  let node = a.childNodes;
  for (let i = 1; i < node.length; i++) {
    node[i].remove();
  }
  a.remove();
}

function edit(e) {
  let a = e.previousElementSibling;
  a.contentEditable = true;
  a.backgroundcolor = "blue";
  a.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
      editdone(a);
    }
  });
}

function editdone(a) {
  a.contentEditable = false;
  a.backgroundcolor = "#ebbceb";
}