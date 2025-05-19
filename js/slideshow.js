var slide = document.querySelector('.slideshow'); // Select the image element
var images = [ // Array of image paths
		'/logos/bmw.png',
		'logos/ford.png',
		'logos/chevy.png',
		'logos/logomercedes.png',
		'logos/honda.png',	
		];
var time= 2000; // Time interval for the slideshow in milliseconds
var count= 0; // Counter to keep track of the current image index
	function moveSlideShow(){  // Function to change the image
		slide.src=images[count];
		if(count <images.length -1){
			count++;
		} else {
			count=0;
		}
		setTimeout("moveSlideShow()", time);
	}
window.onload = moveSlideShow; // Start the slideshow when the window loads