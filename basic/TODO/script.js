const taskInput = document.getElementById('taskInput')
const addBtn= document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

addBtn.addEventListener('click',addtask);

taskInput.addEventListener("keypress" ,(e)=>{
    if (e.key === "Enter") {
        addtask();
    }
});

function addtask (){
    const task =taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task!")
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.className="task-text";
    span.textContent= task;

    span.addEventListener("click", function(){
        li.classList.toggle("complted");
    });


    const deltebtn = document.createElement("button");
    deltebtn.textContent="delete";
    deltebtn.className="delete-btn";

    deltebtn.addEventListener("click" , function(){
        li.remove();
    });

    li.appendChild(span);
        li.appendChild(deltebtn);
        taskList.appendChild(li);

        taskInput.value ="";
        taskInput.focus();
}