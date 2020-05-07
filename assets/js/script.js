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






















