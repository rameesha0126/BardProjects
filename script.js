//querySelector() method returns the first element that matches a CSS selector
var list = document.querySelector("#list");
var task = document.querySelector("#task");
var addButton = document.querySelector("#add");

//Add a click event to a <button> element
addButton.addEventListener("click", function(){
    var taskText = task.value;
    if(taskText != ""){
        //Create a <li> element and append it to the document
        var li = document.createElement("li");
        li.textContent = taskText;
        list.appendChild(li);
        task.value = "";
    } 
})
