function add() {
    var color = document.getElementById('color');
    var number = color.innerHTML;
    number++;
    color.innerHTML = number;
}

function subtract(){
	var color = document.getElementById('color');
    var number = color.innerHTML;
    number--;
    color.innerHTML = number;
}

function color(){
	var colorChosen= document.getElementById('colorChosen');
    var colour= colorChosen.innerHTML;
    
    chosenC.innerHTML = number;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnCart = document.getElementById("cart");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnCart.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}