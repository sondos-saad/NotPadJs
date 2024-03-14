let inputTitle = document.getElementById("title-note");
let addBtn = document.getElementById("addbtn");
let contentNote = document.getElementById("content-note");
let output = document.getElementById("output");

let item, btnDel, h2, p ,task;
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(inputTitle.value == "" || inputTitle.value == " "){
        alert("Please write Title Note")
    }else if(contentNote.value == "" || contentNote.value == " "){
        alert("Please write your Note")
    }else{
        item = document.createElement("div");
        btnDel = document.createElement("button");
        h2 = document.createElement("h2");
        p = document.createElement("p");
        task = document.createElement("div");

        h2.innerHTML = inputTitle.value;
        p.innerHTML = contentNote.value;
        btnDel.innerHTML = "Remove";

        item.classList.add("item");
        btnDel.classList.add("remove");
        btnDel.classList.add("btn");
        task.classList.add("task");

        
        item.appendChild(h2 )
        item.appendChild(task )
        task.appendChild(p)
        task.appendChild(btnDel)
        output.appendChild(item);

        inputTitle.value = ""
        contentNote.value = ""
    }
    btnDel.addEventListener("click", function(){
        this.closest(".item").remove();
    })
})

