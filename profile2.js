



$(document).on('ready', function() {
	var isFormVisible = false;
	var userProfile = {};

	//$('#form').hide();
	$('#form').slideUp();
  	$('#btnShowForm').on('click',function(){
   		if (isFormVisible) {
   			//$('#form').hide();
   			$('#form').slideUp();
   			isFormVisible = false;
   			$('#btnShowForm').text("Hide Form");
   		}
   		else {
   			//$('#form').show();
   			$('#form').slideDown();
   			isFormVisible = true;
   			$('#btnShowForm').text("Show Form");
   		
   		}
  	});

  	$('input[type="submit"]').on('click',function(e){
  		e.preventDefault();
  		userProfile.name = $('input[type="text"]').val();
  		userProfile.bio = $('#bioArea').val();
  		userProfile.book = $('#bookArea').val();
  		userProfile.javascript = $('#librariesArea').val();


  		// console.log(userProfile.name + " " +
  		// 	userProfile.bio + " " +
  		// 	userProfile.book + " " +
  		// 	userProfile.javascript);

  		$('.userProfileDisplay').html(
  			"Name: " + userProfile.name + "<br/>" + "Bio: " + userProfile.bio + "<br/>" + "Book: " + userProfile.book + "<br/>" + "Javascript Libraries: " + "<br/>"
  			);

  	});




});