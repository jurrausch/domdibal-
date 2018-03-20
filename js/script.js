$('.ui.dropdown')
	.dropdown();

$('.ui.accordion')
  .accordion()
;


$('.ui.rating')
  .rating()
;
// Modal Function 
$(".border-btn").click(function() {
	$('.ui.modal').modal('show');
});

// delete Account
$(".del-account").click(function() {
$('.del-modal').modal({
    inverted: true
  })
  .modal('show');
});





