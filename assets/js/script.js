/* Author: 

*/
var savebtn=document.getElementById("saved");

/* function to get value from user*/ 
var selectedLi=null;
function getVal(){
    var name=document.getElementById("item").value;
    var quan=document.getElementById("quant").value;
    if(selectedLi == null){
        store(name,quan);
    }
    else{
        modify(name,quan);
    }
    document.getElementById("item").value="";
    document.getElementById("quant").value="";
}

/*function to store values  in local storage*/
function store(name,quan){
    localStorage.setItem("ItemName",name);
    localStorage.setItem("Quantity",quan);
    display();
}

/*function to display user-input*/
function display(){
    var itemname=localStorage.getItem("ItemName");
    var qvalue=localStorage.getItem("Quantity");
    var liststruc = "<span>"+itemname+"</span><span>"+qvalue+"</span><a href='#FIXME' onclick='editlist(this)' title='Modify'>Modify</a><a href='#FIXME' onclick='remove(this)' title='Remove'>Remove</a>";
    var li=document.createElement("Li");
    li.innerHTML=liststruc;
    document.getElementById("userlist").appendChild(li);
}

savebtn.addEventListener("click",getVal,false);

/*function to edit list*/
function editlist(li){
   selectedLi=li.parentElement;
   span= selectedLi.querySelectorAll('span');
   document.getElementById("item").value=span[0].innerHTML;
   document.getElementById("quant").value=span[1].innerHTML;
   return span;
}

/*function to update list*/
function modify(name,quan){
    span[0].innerHTML=name;
    span[1].innerHTML=quan;
}

/*function to remove element from list*/
function remove(li){
    if(confirm("Are you sure you want to delete?")){
        listrow=li.parentElement;
        localStorage.removeItem("ItemName");
        localStorage.removeItem("Quantity");
        listrow.remove();
    }
}






















