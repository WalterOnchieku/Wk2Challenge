 //add items to list container
 function addToList(){
    document.getElementById('dropdown');
    let value=txtbox.value.trim();
    //if value empty nothing is submitted
    if (value == ''){
        return;
    }
    //create dropdown list
    let option = document.createElement("option");
    option.text=value;
    option.value=value;
    dropdown.add(option);

//event for clicking the addToList button
const input = document.getElementById('addToList');
input.addEventListener('click', function addToList() {
alert('item added to cart');
});
   
}

//remove items from list one at a time
function ClearList() {
let x = document.getElementById("dropdown");
x.remove(x.selectedIndex);

//event for clicking the ClearList button
const input2 = document.getElementById('ClearList');
input2.addEventListener('click', function ClearList() {
  alert('Item removed');
});
}
//add bought items to ul
function MarkAsPurchased(){
    
    let droplist = document.getElementById("dropdown").value;
    let listNode = document.getElementById("purchased");
    let liNode = document.createElement("li");
    let dropNode = document.createTextNode(droplist);

liNode.appendChild(dropNode);
listNode.appendChild(liNode);

//event for clicking the MarkAsPurchased button
const input3 = document.getElementById('MarkAsPurchased');
input3.addEventListener('click', function MarkAsPurchased() {
alert('Item bought');
});
}



