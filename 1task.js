var taskInput=document.getElementById("additem"); 
var addButton=document.getElementsByTagName("button")[0]; 
var incompleteTask=document.getElementById("incompletet"); 
var completedTask=document.getElementById("completedt"); 
 
 
 
var createNewTaskElement=function(taskString){ 
 
 var listItem=document.createElement("li"); 
 
  
 var checkBox=document.createElement("input"); 
  
 var label=document.createElement("label"); 
  
 var editInput=document.createElement("input"); 
  
 var editButton=document.createElement("button"); 
 
  
 var deleteButton=document.createElement("button"); 
 
 label.innerText=taskString; 
 
 checkBox.type="checkbox"; 
 editInput.type="text"; 
 
 editButton.innerText="Edit"; 
 editButton.className="edit"; 
 deleteButton.innerText="Delete"; 
 deleteButton.className="delete"; 
 
 
 
 listItem.appendChild(checkBox); 
 listItem.appendChild(label); 
 listItem.appendChild(editInput); 
 listItem.appendChild(editButton); 
 listItem.appendChild(deleteButton); 
 return listItem; 
} 
 
 
 
var addTask=function(){ 
 console.log("Add Task..."); 
  
 var listItem=createNewTaskElement(taskInput.value); 
 
  
 incompleteTask.appendChild(listItem); 
 bindTaskEvents(listItem, taskCompleted); 
 
 taskInput.value=""; 
 
} 
 
 

 
 
 
 
 
var deleteTask=function(){ 
  console.log("Delete Task..."); 
 
  var listItem=this.parentNode; 
  var ul=listItem.parentNode; 
   
  ul.removeChild(listItem); 
 
} 
 
 


var editTask=function(){ 
console.log("Edit Task..."); 
console.log("Change 'edit' to 'save'"); 
 
 
var listItem=this.parentNode; 
 
var editInput=listItem.querySelector('input[type=text]'); 
var label=listItem.querySelector("label"); 
var containsClass=listItem.classList.contains("editMode"); 
   
  if(containsClass){ 
 
   
   label.innerText=editInput.value; 
  }else{ 
   editInput.value=label.innerText; 
  } 
 
   
  listItem.classList.toggle("editMode"); 
} 
 

 
var taskIncomplete=function(){ 
  console.log("Incomplete Task..."); 
 
   
  var listItem=this.parentNode; 
 incompleteTask.appendChild(listItem); 
   bindTaskEvents(listItem,taskCompleted); 
} 
 
 
 
var ajaxRequest=function(){ 
 console.log("AJAX Request"); 
} 
 
 
 var taskCompleted=function(){ 
  console.log("Complete Task..."); 
  
  
 var listItem=this.parentNode; 
 completedTask.appendChild(listItem); 
    bindTaskEvents(listItem, taskIncomplete); 
 
} 
 
 
 
addButton.onclick=addTask; 
addButton.addEventListener("click",addTask); 
addButton.addEventListener("click",ajaxRequest); 
 
 
var bindTaskEvents=function(taskListItem,checkBoxEventHandler){ 
 console.log("bind list item events"); 
 
 var checkBox=taskListItem.querySelector("input[type=checkbox]"); 
 var editButton=taskListItem.querySelector("button.edit"); 
 var deleteButton=taskListItem.querySelector("button.delete"); 
 
 
    
   editButton.onclick=editTask; 
    
   deleteButton.onclick=deleteTask; 
    
   checkBox.onchange=checkBoxEventHandler; 
} 
 
 
 for (var i=0; i<incompleteTask.children.length;i++){ 
 
   
  bindTaskEvents(incompleteTask.children[i],taskCompleted); 
 } 
 
 
 

 
 for (var i=0; i<completedTask.children.length;i++){ 
   {
      document.getElementById("completedt").style.textDecoration="line-through"
    }
  bindTaskEvents(completedTask.children[i],taskIncomplete); 

 }
