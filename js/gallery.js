//Create an overlay
var $overlay = $('<div id="overlay"></div>');
var $theShadow = $('<div id="theShadow"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $prevArrow = $('<button id="prev-arrow">〈</button>');
var $nextArrow = $('<button id="next-arrow">〉</button>');
var imageLocation;
window.pageScroll = true;
 
//Append overlay
$overlay.append($image);//append image first in order to have more time to load
$("body").append($theShadow);
$theShadow.append($overlay);
$theShadow.append($prevArrow);
$theShadow.append($nextArrow);
$overlay.append($caption);

//Overlay shows
function showOverlay(){
	updateOverlay(imageLocation);
	$overlay.fadeIn();
	$theShadow.fadeIn();
	window.pageScroll = false;
}

//Overlay hides
function hideOverlay(){
	$overlay.fadeOut();
	$theShadow.fadeOut();
	window.pageScroll = true;
}

//Show THIS image on click
$("#gallery").on("click", "li a", function(e) {
	event.preventDefault();
	imageLocation = $(this).attr("href");
	showOverlay();
})

//Overlay hides on click
$theShadow.click(function() {
	hideOverlay();
})

//Navigate image within the page
var updateOverlay = function(imageLocation) {
	var $allImageLinks = $('#gallery a');
	var $thisImageLink = $($allImageLinks[i]);
	$image.attr("src", imageLocation);

	for (var i = 0; i < $allImageLinks.length; i++) {
		if ($($allImageLinks[i]).attr('href') === imageLocation) {
			var captionText = $($allImageLinks[i]).find('img').attr('alt');
			$caption.text(captionText);	
			if (i === 0) {
				window.nextHref = $($allImageLinks[i + 1]).attr("href");
				$prevArrow.hide();
				$nextArrow.show();
			} else if (i === ($allImageLinks.length - 1)) {
				window.prevHref = $($allImageLinks[i - 1]).attr("href");
				$prevArrow.show();
				$nextArrow.hide();
			} else {
				window.prevHref = $($allImageLinks[i - 1]).attr("href");
				window.nextHref = $($allImageLinks[i + 1]).attr("href");
				$prevArrow.show();
				$nextArrow.show();
			}
		}
	}
	//Set a seperate style of overlay for portrait images
	if ($allImageLinks.parent().hasClass("portrait-image")) {
		$overlay.addClass("portrait-image");
	} else {
		$overlay.removeClass("portrait-image");
	}
}

function prevImage(){
		updateOverlay(window.prevHref);
}

function nextImage(){
		updateOverlay(window.nextHref);
}

$prevArrow.click(function(e) {
	e.stopPropagation();
	prevImage();
})

$nextArrow.click(function(e) {
	e.stopPropagation();
	nextImage();
})

//Bind keydown event handlers to Lightbox events
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: //left
        prevImage();
        break;

        case 39: //right
        nextImage();
        break;

        case 27: //ESC
        hideOverlay();
				break;

				case 13: //Enter = Show overlay with first image
				imageLocation = $("#gallery li a").attr("href");
				showOverlay();
				break;

        default: return;
    }
    e.preventDefault();
})


















