/****************************
Navigation on Mobile Screen
****************************/
//Add navigation button
var $button = $('<button class="dropdown">+</button>');
$("#menu").prepend($button);

//Navigation shows
function showMenu(){
  $("#menu li").toggle();
  $("#menu li").addClass("dropdown-menu");
}

//Navigation hides
function hideMenu(){
  $("#menu li").hide();
  $("#menu li").removeClass("dropdown-menu");
}

//Navigation shows on click
$button.click(function(){
  showMenu();
})

//Navigation hides when mouse leaves
$("#menu").mouseleave(function(){
  if ($("#menu li").hasClass("dropdown-menu")) {
    hideMenu();
  }
})