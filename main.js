$(document).ready(init)

var arrayOfImagesG = ['fa fa-heart', 'fa fa-heart','fa fa-anchor', 'fa fa-anchor', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-diamond', 'fa fa-futbol-o', 'fa fa-futbol-o', 'fa fa-paw','fa fa-paw', 'fa fa-smile-o','fa fa-smile-o', 'fa fa-paper-plane', 'fa fa-paper-plane'];

var $previousElementG = $();

var currentlyOpenedCountFlagG = 0;  // Track 

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

    }

    $('.container').append(imagesArray);
}

function clickedImage() {

    console.log("clicked me!");

    // Side note: $(this) is "global" in nature, meaning once out of the function, it changes to Window. 
    // $this is local in nature. Will be the same even after leaving the function. 
    var $this = $(this);

    var test = false 

    /*
    if(($this.attr('class').split(' ')[1] !== 'selected') && ) {
		// Track open card sequence 
   		
    }
    */
    currentlyOpenedCountFlagG++; 
   
    // Add image to card only if the card has not been selected    
    console.log('count flag', currentlyOpenedCountFlagG);
    if(($this.attr('class').split(' ')[1] !== 'selected') && currentlyOpenedCountFlagG <= 2) {

  	    console.log('INSIDE SELECTED');

     
        // Generate a random index between 0 and the (length of the array - 1)
   		randomArrayIndex = Math.floor(Math.random()*arrayOfImagesG.length + 0);

   		// Get a random element in the array and remove that element from the array  
     	var cardImage = arrayOfImagesG.splice(randomArrayIndex,1)[0];

        // Label div as selected       		
   		$this.addClass('selected');

        //$(this).append('<i class=\'fa fa-heart\'>');
        $(this).append('<i class=\''+cardImage+'\'>');
      
        /*  Maybe be useful... 
        	console.log('this is previous element image', $previousElementG.find('i').attr('class'));
        	console.log('this is current element image', $(this).find('i').attr('class'));
        	console.log('is current element image equal to previous element image?', ($previousElementG.find('i').attr('class') === $(this).find('i').attr('class')));
        	$(this).find('i').hide();
        	$(this).find('i').show();
        */

    }  // if(($this.attr('class').split(' ')[1] !== 'selected')...

    else {
 		//debugger;
 		
 		$(this).find('i').show();
 	}

    console.log('currentlyOpenedCountFlagG', currentlyOpenedCountFlagG);
    // Compare 2 elements on opening the 2nd card 
    if(currentlyOpenedCountFlagG === 2) {

    	//debugger;

    	console.log('INSIDE COMPARE');
           
        //debugger;
        console.log('current', ($this.attr('class').split(' ')[2]));
        console.log('current', ($previousElementG.attr('class').split(' ')[2]));

        console.log('curren its ', $this);
        console.log('previous is', $previousElementG);
        
        if(($this.attr('class').split(' ')[2] !== 'remainOpen') && ($previousElementG.attr('class').split(' ')[2] !== 'remainOpen')){
         	
         	var $tempPreviousElement = $previousElementG; 		
			var $tempThis = $(this);
           
    		if($(this).find('i').attr('class') !== $previousElementG.find('i').attr('class')) {

    			console.log('INSIDE TWO ELEMENTS NOT EQUAL');

    	    	setTimeout(function(){ 

					$tempPreviousElement.find('i').hide(); 
        	    	
    		    	$this.find('i').hide();
			 
        	    }, 1000);  // setTimeout() 
        	}  //  if($(this).find('i').attr('class') !===

        	else {

        		debugger;
        		// Label element to indicate should remain open       		
   				$this.addClass('remainOpen');

        	}

    	} // if this.attr split remain open 

    	else if($this.attr('class').split(' ')[2] !== 'remainOpen' && $previousElementG.attr('class').split(' ')[2] === 'remainOpen') {
	    	
	    	debugger;
	    	$this.find('i').hide();
    	} 

    	else if($this.attr('class').split(' ')[2] === 'remainOpen' && $previousElementG.attr('class').split(' ')[2] !== 'remainOpen') {   
			debugger;
			$tempPreviousElement.find('i').hide(); 
    	}
        
        // Reset flag to identify next time to compare 2 elements 
        currentlyOpenedCountFlagG = 0;
    }  // currentlyOpenedCountFlagG === 2

        // Set previous element to current element 
    $previousElementG = $(this); 
}  //  clickedImage()


  
