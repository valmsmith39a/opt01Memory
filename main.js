$(document).ready(init)

var arrayOfNumbersG = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

var arrayOfImagesG = ['fa fa-anchor'];

var previousElement = $();

function init() {

console.log('in jquery');

setUpGame(); 

$('.images').click(clickedImage);

}

function setUpGame() {

    var imagesArray = [];

    for(var i = 0; i < 2; i++) {

    	var $element = $('<div>').addClass('images').data('number', -1);

    	imagesArray.push($element);

    	//console.log('element is: ', $element);

    	//console.log('data number: ', $element.data('number'));
    	
    	//('<div class=\'images\ image'+i+'\' data-number:'+i+'>'+i+'</div>');
    }

    $('.container').append(imagesArray);
}

function clickedImage() {

   console.log("clicked me!");

   var $element = $(event.target);

   var $this = $(this);

   //  Not sure if need this 
   var $selected = $('.selected');

   var $previousElement = $('.container').find('.selected').first().text(); 

   //console.log("the previous element is", $previousElement);

   // If the card has not been selected
  if(($this.attr('class').split(' ')[1] !== 'selected')) {

  	    console.log('inside selected');

        // --- Set the card --- 
        
        // Generate a random index between 0 and the (length of the array - 1)
   		randomArrayIndex = Math.floor(Math.random()*arrayOfImagesG.length + 0);

   		// Get a random element in the array and remove that element from the array  
     	var cardImage = arrayOfImagesG.splice(randomArrayIndex,1)[0];
      		
   		$this.addClass('selected');
   		  
        $(this).append('<i class=\''+'fa fa-anchor'+'\'>');
        
        /*
   		if($previousElement.text === $this.text()){

   			$('.selected').remove();

   		}
   		*/
 }

}


   /*
   if($cardFlipped.data('number') == -1) {
       
       console.log('data-number' + $cardFlipped.data('number', cardImage));
       $cardFlipped.text(cardImage);

       var $selected = $('.selected');

       $cardFlipped.addClass('selected');



       // Compare with other selected cards  
   }

   else{
   	   console.log('data number is: ', $cardFlipped.data('number'));
   	   
   	   // Find selected cards and compare 
       var $selected = $('.selected');

       if($selected.length)
   }
   */

  