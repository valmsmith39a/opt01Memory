$(document).ready(init)

var arrayOfNumbersG = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];


function init() {

console.log('in jquery');

setUpGame(); 

$('.images').click(clickedImage);

}

function setUpGame() {

    var imagesArray = [];


    for(var i = 0; i < 16; i++) {

    	var $element = $('<div>').addClass('images').data('number', -1);

    	imagesArray.push($element);

    	console.log('element is: ', $element);

    	console.log('data number: ', $element.data('number'));
    	
    	//('<div class=\'images\ image'+i+'\' data-number:'+i+'>'+i+'</div>');
    }

    console.log('imagesArray: ', imagesArray);

    $('.container').append(imagesArray);
}

function clickedImage(event) {

   console.log("clicked me!");
   
   var $cardFlipped = $(event.target);

   // Generate a random index between 0 and the (length of the array - 1)
   randomArrayIndex = Math.floor(Math.random()*arrayOfNumbersG.length + 0);

   console.log('array before SETTING card image', arrayOfNumbersG);

   // Get a random element in the array and remove that element from the array 
   // NOTE: Need to change variable name when use image
   var cardImage = arrayOfNumbersG.splice(randomArrayIndex,1)[0];

   console.log('random element REMOVED from array: ', cardImage);
   
   console.log('array after SETTING card image', arrayOfNumbersG);
   
   if($cardFlipped.data('number') == -1) {
       
       console.log('data-number' + $cardFlipped.data('number', cardImage));
       $cardFlipped.text(cardImage); 
   }

   else{
   	   console.log('data number is: ', $cardFlipped.data('number'));
   }


   // Set image on card 
   



   console.log('Reading face number on card: ', $(event.target).text());

}

