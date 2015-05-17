var galleryPage = window.whatPageAreWeOn = 0;
var allGalleryPages = 8;

//Load first page
$("#gallery").load("gallery/" + galleryPage + ".html");
pageArrows();

//Page up and down
function nextPage(){
  if (galleryPage < allGalleryPages && window.pageScroll === true) {
    galleryPage = galleryPage + 1; 
    $("#gallery").load("gallery/" + galleryPage + ".html");
  } 
  pageArrows();
}

function prevPage(){
  if (galleryPage > 0 && window.pageScroll === true) {
    galleryPage = galleryPage - 1;
    $("#gallery").load("gallery/" + galleryPage + ".html");
  }
  pageArrows();
}

$("#next").click(function(){
	nextPage();
})

$("#previous").click(function(){
  prevPage();
})

function pageArrows() {
  //prevArrow
  if (galleryPage > 0) {
    $("#previous").show();
  } else {
    $("#previous").hide();
  }
  //nextArrow
  if (galleryPage < allGalleryPages) {
    $("#next").show();
  } else {
    $("#next").hide();
  }
}

//Bind keydown event handlers to page events
$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
        prevPage();
        break;

        case 39:
        nextPage();
        break;
        default: return; 
    }
    e.preventDefault(); 
});