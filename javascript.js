function TaskDone(nusrathandbenjamin)
{
   var bulletstyle = document.getElementById(nusrath).style.textDecoration;
  if(bulletstyle=="line-through")
  		document.getElementById(nusrath).style.textDecoration="none";
      else
    		document.getElementById(nusrath).style.textDecoration="line-through";

}

function clearAll(){
names = $('.task');
names.css("text-decoration","none");
}



function AddItem(){
  var i = prompt("Enter item to add to the list");
  addListItem(i);
}


function addListItem(text){
  list = document.querySelector('ol');
  item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);
}
