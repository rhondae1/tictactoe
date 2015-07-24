// REMEMBER TO LOAD JQUERY AND JS FILES IN HTML


// RADIO buttons:

//<input type="radio" class="checked" name="red">Red
//<input type="radio" name="blue">Blue
///
// Switching between red and blue user:
// Click function for selecting red or blue user

$("input[type='radio']").click(function () {
	$(this).prop('checked');
	$(this).addClass('checked');
	$(this).siblings().removeProp('checked'); // .sibling or .siblings??
	$(this).siblings().removeClass('checked');
});

// Click function to toggle class of  TD cell 'blue' (on and off)
	
	$('td').click(function () {
		if ($('[name="blue"]').hasClass('checked')) {
			$(this).toggleClass('blue');
		}
		if ($('[name="red"]').hasClass('checked')) {
			$(this).toggleClass('red');
		}
	});




// SET UP WINNERS: Ask if three in a row for each scenario.

var winningClasses = [".row1", ".row2", ".row3", ".column1", ".column2", ".column3", ".diag1", ".diag2"];

$('td').click(function () {
	for (i=0; i < winningClasses.length; i++) {
		if (($(winningClasses[i] + ".blue").length === 3)) {
			alert("Hill Dawg Won!")
		}
		if (($(winningClasses[i] + ".red").length === 3)) {
			alert("You're Fired!")
		}
	}
});

