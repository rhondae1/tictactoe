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
	$(this).siblings().removeProp('checked') // .sibling or .siblings??
	$(this).siblings().removeClass('checked');
});

// Click function to toggle class of  TD cell 'blue' (on and off)
	
	$('td').click(function () {
		if ($('[name="blue"]').hasClass('checked')) {
			$(this).toggleClass('blue');
		} else if ($('[name="red"]').hasClass('checked')) {
			$(this).toggleClass('red');
		}
	});

// SET UP WINNERS: Ask if three in a row for each scenario.

$('td').click(function () {
	if (($('.row1.blue').length) === 3) {
		alert("Blue Won!");
	}
	if (($('.row2.blue').length) === 3) {
		alert("Blue Won!");
	}
	if (($('.row3.blue').length) === 3) {
		alert("Blue Won!");
	}
	if (($('.column1.blue').length) === 3) {
		alert("Blue Won!");
	}
	if (($('.column2.blue').length) === 3) {
		alert("Blue Won!");
	}
	if (($('.column3.blue').length) === 3) {
		alert("Blue Won!");
	}
	if (($('.diag1.blue').length) === 3) {
		alert("Blue Won!");
	}
	if (($('.diag2.blue').length) === 3) {
		alert("Blue Won!");
	}
});


$('td').click(function () {
   if (($('.row1.red').length) === 3) {
       alert("Red Won!");
   }
   if (($('.row2.red').length) === 3) {
       alert("Red Won!");
   }

   if (($('.row3.red').length) === 3) {
       alert("Red Won!");
   }

   if (($('.column1.red').length) === 3) {
       alert("Red Won!");
   }

   if (($('.column2.red').length) === 3) {
       alert("Red Won!");
   }

   if (($('.column3.red').length) === 3) {
       alert("Red Won!");
   }

   if (($('.diag1.red').length) === 3) {
       alert("Red Won!");
   }

   if (($('.diag2.red').length) === 3) {
       alert("Red Won!");
   }
});
