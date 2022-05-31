function usl(e) { if(e.keyCode == 13) document.enter.submit(); }

var list = document.querySelector('#list');
var todos;

function toLocal(){
    localStorage.setItem('todos', document.querySelector('#list').innerHTML);
}

function newElement(){
    var inputValue = document.getElementById('nameTask').value;
    var inputValue2 = document.getElementById('newTask').value;
    var inputValue3 = document.getElementById('timeTask').value;
    
    var txt = document.createTextNode(inputValue);
    var txt_2 = document.createTextNode(inputValue2);
    var txt_3 = document.createTextNode(inputValue3);

    var ul = document.createElement('ul');
    var ul_2 = document.createElement('ul');
// var ul_3 = document.createElement('ul');


    var li = document.createElement('li');
    var li_2 = document.createElement('li');


    var p = document.createElement('p');
    var p_2 = document.createElement('p');

    var supportText = document.createTextNode('---');
    var supportText_2 = document.createTextNode('minutes');

    
    ul.appendChild(li);
    li.appendChild(p);
    p.appendChild(txt);
    ul.appendChild(ul_2);
    ul_2.appendChild(li_2);
    li_2.appendChild(p_2);
    p_2.appendChild(txt_2);
    ul_2.appendChild(li_2);
    li_2.appendChild(p_2);
    p_2.appendChild(txt_3);
    p_2.appendChild(supportText);
    p_2.appendChild(supportText_2);

    if (inputValue == ""){
        alert("придумайте себе дело!");
    } 
    else{
        document.getElementById('list').appendChild(ul);
    }
    if (inputValue2 == ""){
        alert("вы не написали подзадние..");
    } 
    else{
        document.getElementById('list').appendChild(ul);
    }
    if (inputValue3 == ""){
        alert("вы не указали сколько времени вам понадобится");
    } 
    else{
        document.getElementById('list').appendChild(ul);
    }
    document.getElementById('nameTask').value = "";
    document.getElementById('newTask').value = "";
    document.getElementById('timeTask').value = "";
    
    var button = document.createElement('button');
    var ld = document.createTextNode('load');
    button.className = "load";
    button.appendChild(ld);
    li.appendChild(button);
    toLocal();

    var todos = {
        nameTask: txt,
        oldTask: txt_2,
        timeTask: txt_3
    }
        document.querySelector('button').onclick = function() {
        Object.keys(todos).forEach(function () {
        document.getElementById('#list').value = todos['#list'];
    });
    }
}
if(localStorage.getItem('todos')){
    list.innerHTML = localStorage.getItem('todos');
}

    