var id = 0;
var done = 0;
const ele = document.getElementById('thelist');
const put = document.getElementById('task');




function newTask(task, id) {

    return `<li>
<input onclick='switchState(${id})' type="checkbox" name="${id}" class="check" id="0${id}"/>
<label id="${id}" for="${id}">${task}</label>
</li><hr><hr>`;
}

function display() {
    let text = `<span>You finished all your tasks 😁</span>`;
    let left = id-done;
    if (left > 1) {
        text = `You have ${left} tasks out ${id} to get done`;
    }
    else if (left > 0){
        text = `You only have one task left`;
    }
    document.getElementById("msg").innerHTML = text;
}

window.onload = function(){
    document.getElementById('thelist').innerHTML =
    newTask("No tasks yet", 0);
    document.getElementById("sub").addEventListener("click", function() {addTask(document.getElementById("task").value);});
    document.getElementById("clear").addEventListener("click", function() {clear();});
    document.addEventListener('keydown', enter);
    document.getElementById("msg").innerHTML = "Your task count will appear here";
    }

function clear() {
    id = 0;
    ele.innerHTML = newTask("No tasks yet", 0);
    document.getElementById("msg").innerHTML = "Your task count will appear here";
}

function enter(e){
    if (e.code == "Enter") {
        addTask(document.getElementById("task").value);
    }
    if (e.code == "Escape") {
        clear();
    }
}

function addTask(task){
    if (task === ""){
        console.log("no string");
        return;}
    if (id == 0) {
        ele.innerHTML = newTask(task, id)
        put.value = ''
        console.log("id is equal to zero so replace");
        id += 1;
        return;
    }
    console.log("id os more than 0 so add an element");
    id += 1;
    ele.innerHTML += newTask(task, id)
    put.value = ''
}

function switchState(id) {
    console.log(`Element number ${id+1}`);
    if (document.getElementById(`0${id}`).checked) {
        document.getElementById(`${id}`).style["text-decoration"] = "line-through";
        done += 1;
    } else {
        document.getElementById(`${id}`).style["text-decoration"] = "none";
        done -= 1;
    }
    display();
}
