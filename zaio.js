
window.dict ={}; //dictionary to keep track of color and number of times each color is selected
window.colors=[new color("Red",14.99),new color("Blue",17.89),new color("Green",34),new color("Orange",56)];
function add() {                    //increments number when plus clicked
    var color = document.getElementById('color');
    var count = document.getElementById('count');
    var number = color.innerHTML;
   
      number++;
    
    
    count.innerHTML=number;
    color.innerHTML = number;
}

function subtract(){  //decrements number when minus clicked
	var color = document.getElementById('color');
   var count = document.getElementById('count');
  

    var number = color.innerHTML;
    
     if (number>0){
      number--;
    }
    count.innerHTML=number;
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

var agree = document.getElementById("Agree");



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

function myFunction() {
  
   var color = document.getElementById('color');    
   var background = document.getElementById('chosenC');
  var number = color.innerHTML;
  var backC = background.innerHTML;

  dict[backC]=number;    //adds color and number of times to dictionary
  

  for(var i=0;i<number;i++){
    var btn = document.createElement("BUTTON");
    btn.style.backgroundColor=background.innerHTML;   //sets the background of the button equal to the background color
  
    btn.className = "btn"


    
   document.getElementById("buttonsCheck").appendChild(btn);   //adds color near details

 }
}

function getColor(){
  
  var cart = document.getElementById('cart');
  var count = document.getElementById('count');


  var countValue = count.innerHTML;
  var cartCheck = cart.innerHTML;
  
  $("#myModal").modal("show"); //opens normal modal
   var colorC = document.getElementById('colorChosen');
   var background = document.getElementById('chosenC');
   var col = colorC.innerHTML;
   var c = col.slice(24);
   background.innerHTML=c;
 

   
  
 }

 function redClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.red = new color("Red",14.99);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ red.name;

 }

 function blueClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.blue = new color("Blue",17.89);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ blue.name;

 }
 function silverClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.silver = new color("Silver",14.99);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ silver.name;

 }
 function blackClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.black= new color("Black",20);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ black.name;

 }
 function pinkClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.pink = new color("Pink",17.67);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ pink.name;

 }
 function greenClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.green = new color("Green",34);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ green.name;

 }
 function orangeClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.orange = new color("Orange",56);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ orange.name;

 }
 function navyClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.navy = new color("Navy",67);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ navy.name;

 }
 function purpleClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.purple = new color("Purple",21);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ purple.name;

 }
 function yellowClick(){
  
    class color{

      constructor(name,price){
          this.name = name;
          this.price = price;
        }
   }   
   window.yellow = new color("Yellow",21);
 
   
    
   document.getElementById("colorChosen").innerHTML ="<strong>COLOR:</strong> "+ yellow.name;

 }
 function checkOut(){
   $("#modalCheckout").modal("show");
    
  
   for(var key in dict) {
    
     var value = dict[key];
     var par = document.createElement("P");
      //par.innerHTML=key+" "+value;
      
     
   // document.getElementById("test").innerHTML="does this work";

     if(key==red.name){
       par.innerHTML=red.name+"   "+value+"    "+ red.price*value;
     }
     else if(key==yellow.name){
       par.innerHTML=yellow.name+"   "+value+"   "+ yellow.price*value;
     }
     else if(key==black.name){
    
       par.innerHTML=black.name+"   "+value+"   "+ black.price*value;
      

     }

    else if(key==navy.name){
           par.innerHTML=navy.name+"   "+value+"    "+ navy.price*value;
         }

      else if(key==silver.name){
             par.innerHTML=silver.name+"   "+value+"   "+ silver.price*value;
           }

      else if(key==blue.name){
             par.innerHTML=blue.name+"   "+value+"   "+ blue.price*value;
           }

      else if(key==pink.name){
             par.innerHTML=pink.name+"   "+value+"   "+ pink.price*value;
           }

      else if(key==green.name){
             par.innerHTML=green.name+"   "+value+"   "+ green.price*value;
           }

      else if(key==orange.name){
             par.innerHTML=orange.name+"   "+value+"   "+ orange.price*value;
           }

      else if(key==purple.name){
             par.innerHTML=purple.name+"   "+value+"   "+ purple.price*value;
           }
     
     
     document.getElementById("para").appendChild(par);
    }

}
