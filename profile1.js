// Part I
// 1. Create a static user profile with HTML and css
// 2. Add a click handler to each text block
// 3. When a text block is clicked, hide the text block and display an input in its palce. The input should take up the same spaces as the text block so that the transition from text to editable field is seamless and doesn't throw off the layout
// 4. When the input is blurred: 1. Hide the input, 2. Show the text block, 3. Update the text block with the next text

// Part II
//Refactor your code so that you can apply a class 'editable' to any element within your html and when the page loads your script will automatically make those elements in-place editable.


$(document).on('ready', function() {
  
	$('.editable').on('mouseover',function(){
		//console.log($(this));
	 	$(this).css('background-color', 'yellow');
	});

	$('.editable').on('mouseout',function(){
		//console.log($(this));
	 	$(this).css('background-color', 'white');
	});

	$('.editable').on('click', function() {
			
			var resultInput ="";
			var currentNode = $(this);
			var parentNode = currentNode.parent();

			// retrieve the old value
			var savedInput = currentNode.text();
			
			//console.log(currentNode.text());
			//console.log(currentNode);
			//console.log(parentNode);
			
			$(currentNode).hide();

			var createAForm = $('<form>')
				.addClass('formInput')
				.append('<input type="text" />')
				.append('<input type="submit" value="submit" />')
				.append('<input type="button" value="x"/>');

			$(parentNode).append(createAForm);

			$('input[type="text"]').focus();

			$('input[type="button"]').on('click',function() {
				$('.formInput').hide();
				$(currentNode).show();
			});

			$('input[type="submit"]').on('click',function(e) {
				e.preventDefault();
				resultInput = $('input[type="text"]').val();
				$(currentNode).text(resultInput).show();
				$('.formInput').hide();
				$(parentNode).find();
				//$(parentNode).empty();
				savedInput = resultInput;
				console.log(resultInput);
				

			});		

	});

// $createAForm = ('<form>')
// 	.addClass('formInput')
// 	.append('<input type="text" />')
// 	.append('<input type="submit" value="submit" />')
// 	.append('<input type="button />');

// $('.editable').append();



 //  $('.block').on('mouseover', function() {
 //  		$('.block').css('background-color', 'yellow');
 //  });

	// $('.block').on('mouseout', function() {
 //  		$('.block').css('background-color', 'white');
 //  });

	// $('.block').on('click',function(){
	 	
	// 	$('.block').hide();

	// 	var createAForm = $('<form>')
	// 		.addClass('formInput')
	// 		.append('<input type="text" name="editText" /><br/><br/>')
	// 		.append('<input type="submit" value="submit" />')
	// 		.append('<input type="button" value="x" />');

	// 	$('.profile').append(createAForm);
		
	// 	$('input[type="text"]').focus();
			

	// 	$('input[type="button"]').on('click',function() {
	// 		$('.formInput').hide();
	// 		$('.block').show();
	// 		//console.log("button");
	// 	});

	// 	$('input[type="submit"]').on('click',function(e) {
	// 		e.preventDefault();
	// 		var resultInput = $('input[type="text"]').val();
	// 		//console.log(resultInput);
	// 		$('.formInput').hide();
	// 		$('.block').text(resultInput).show();
	// 		//console.log("submit");
	// 	});		
	// });
});