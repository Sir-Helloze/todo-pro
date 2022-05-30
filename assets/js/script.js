function usl(e) { if(e.keyCode == 13) document.enter.submit(); }

var list = document.querySelector('#list');
var todos;

function toLocal(){
    localStorage.setItem('todos', document.querySelector('#list').innerHTML);
}

function newElement(){
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var p = document.createElement('p');
    var inputValue = document.getElementById('nameTask').value;
    var text = document.createTextNode(inputValue);
    ul.appendChild(li);
    li.appendChild(p);
    p.appendChild(text);
    if (inputValue == ""){
        alert("придумайте себе дело!");
    } 
    else{
        document.getElementById('list').appendChild(ul);
    }
    document.getElementById('nameTask').value = "";
    
    var span = document.createElement('SPAN');
    var ld = document.createTextNode('load');
    span.className = "load";
    span.appendChild(ld);
    li.appendChild(span);
    toLocal();
}
if(localStorage.getItem('todos')){
    list.innerHTML = localStorage.getItem('todos');
}