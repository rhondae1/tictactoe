// REMEMBER TO LOAD JQUERY AND JS FILES IN HTML

// Click function to toggle class of  TD cell 'blue' (on and off)

//When red is clicked
$('#red').click(function (event) {
    //prevent default action and set a border to highlight whose turn it is.
    event.preventDefault();
    $(this).css("border", "5px solid red");
    $('#blue').css("border", "none");
    $(this).addClass("players-turn");
    $('#blue').removeClass("players-turn");
});

$('#blue').click(function (event) {
    //prevent default action and set a border to highlight whose turn it is.
    event.preventDefault();
    $(this).css("border", "5px solid blue")
    $('#red').css("border", "none");
    $(this).addClass("players-turn");
    $('#red').removeClass("players-turn");
});

    //When a cell is clicked
    $('td').click(function () {
        if ($('#red').hasClass("players-turn")) {
        //Change class of cell to red
            $(this).toggleClass('red'); 
        }
        if ($('#blue').hasClass("players-turn")) {
        //Change class of cell to red
            $(this).toggleClass('blue'); 
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

$('#refresh').click(function() {window.location.reload()});



