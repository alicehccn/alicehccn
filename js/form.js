
/************************
Enable Contact Form
************************/
$(document).ready(function(){

var $formName = $("#form_name");
var $formEmail = $("#form_email");
var $formSubject = $("#form_subject");
var $formMessage = $("#form_message");


function isFormNamePresent() {
	return $formName.val().length > 0;
};

function isFormEmailValid() {
	return $formEmail.val().length > 0;
};

function isFormSubjectPresent() {
	return $formSubject.val().length > 0;
};

function isFormMessagePresent() {
	return $formMessage.val().length > 0;
};

function canSubmit() {
	return isFormNamePresent() && isFormEmailValid() && isFormSubjectPresent() && isFormMessagePresent();
};

function enableSubmitEvent() {
	$("#submit").prop("disabled", !canSubmit());
};

$('#contact-form').keyup(enableSubmitEvent);

enableSubmitEvent();

$('form').submit(function(event){
		event.preventDefault();
		var url = $(this).attr("action");
		var formData = $(this).serialize();
		$.post(url, formData, function(response){
			$('#contact-form').html("<p>Thank you for contacting me!</p>")
		});
	});
	
});

