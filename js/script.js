$(function(){
	$('.ui.dropdown')
		.dropdown();

	$('.ui.accordion')
		.accordion();


	$('.ui.rating')
		.rating();
	// Modal Function 
	$(".border-btn").click(function () {
		$('.ui.modal').modal('show');
	});

	// delete Account
	$(".del-account").click(function () {
		$('.del-modal').modal({
				inverted: true
			})
			.modal('show');
	});


	// Open Overlay add payment
	$(".bill-con.addy").click(function () {
		$('.ui.modal').modal('show');
	});

	// add new section CV editor
	$(".add-sect.new").click(function () {
		$('.ui.new_section.modal').modal('show');
	});

	//tab menu
	$('.menu .item')
		.tab();

	// CV Modal
	$(".modal-cv").click(function () {
		$('.ui.open-cv.modal').modal('show');
	});	
	// Closing modal 
	$('.close-modal').click(function(){
		$('.ui.modal').hide();
	});
	
	// open import modal
		$(".open-cv-modal").click(function () {
		$('.ui.small.modal').modal('show');
	});	
	// open message modal 
	
		$(".contact-me").click(function () {
		$('.ui.small.open-message.modal').modal('show');
			
	});	
	// lik act as a file input

	
}); // JQuery
