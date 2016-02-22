$(document).ready(init)

var arrayOfImagesG = ['fa fa-heart', 'fa fa-heart','fa fa-anchor', 'fa fa-anchor', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-diamond', 'fa fa-futbol-o', 'fa fa-futbol-o', 'fa fa-paw','fa fa-paw', 'fa fa-smile-o','fa fa-smile-o', 'fa fa-paper-plane', 'fa fa-paper-plane'];
var $previousElementG = $();
var currentlyOpenedCountFlagG = 0;  // Track number of squares currently opened 
var totalOpenedCountFlagG = 0; 
var numberOfSquaresG = 16;   

function init() {
	setUpGame(); 
	$('.images').click(clickedImage);
}

function setUpGame() {
    var imagesArray = [];

    for(var i = 0; i < numberOfSquaresG; i++) {
    	var $element = $('<div>').addClass('images').data('number', -1);
    	imagesArray.push($element);
    }

    $('.container').append(imagesArray);
}

function clickedImage() {
    // Side note: $(this) is "global" in nature, meaning once out of the function, it changes to Window. 
    // $this is local in nature. Will be the same even after leaving the function. 
    var $this = $(this);
    currentlyOpenedCountFlagG++; 
   
    // Add image to card only if the card has not been selected    
    if(($this.attr('class').split(' ')[1] !== 'selected') && currentlyOpenedCountFlagG <= 2) {
      
      // Generate a random index between 0 and the (length of the array - 1)
   		randomArrayIndex = Math.floor(Math.random()*arrayOfImagesG.length + 0);
   		
      // Get a random element in the array and remove that element from the array  
     	var cardImage = arrayOfImagesG.splice(randomArrayIndex,1)[0];

   		$this.addClass('selected');
      $(this).prepend('<i class=\''+cardImage+'\'>');
    }  

    else {
 		$(this).find('i').show();
 	}

  // Compare 2 elements on opening the 2nd card 
  if(currentlyOpenedCountFlagG === 2) {
    var $tempPreviousElement = $previousElementG; 		
    var $tempThis = $(this);
        
    if(($this.attr('class').split(' ')[2] !== 'remainOpen') && ($previousElementG.attr('class').split(' ')[2] !== 'remainOpen')) {     	
  		if($(this).find('i').attr('class') !== $previousElementG.find('i').attr('class')) {
      	setTimeout(function(){ 
  				$tempPreviousElement.find('i').hide(); 
  	    	$this.find('i').hide();
  	    }, 1000);  
    	}  

    	else {
  			$this.addClass('remainOpen');
        $tempPreviousElement.addClass('remainOpen');
 				totalOpenedCountFlagG++;

 				if(totalOpenedCountFlagG === (numberOfSquaresG/2)) {
 					winEvent(event);
 				}
    	}
  	} 

  	else if($this.attr('class').split(' ')[2] !== 'remainOpen' && $tempPreviousElement.attr('class').split(' ')[2] === 'remainOpen') {
      $this.find('i').hide();
  	} 
    
    else if($this.attr('class').split(' ')[2] === 'remainOpen' && $tempPreviousElement.attr('class').split(' ')[2] !== 'remainOpen') {   
			$tempPreviousElement.find('i').hide(); 
  	}        
      // Reset flag to identify next time to compare 2 elements 
      currentlyOpenedCountFlagG = 0;
  }  

  // Set previous element to current element 
  $previousElementG = $(this); 
} 

function winEvent(event) {
	alert('YOU WIN!!!!');
}


  
