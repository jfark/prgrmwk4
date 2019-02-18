var mySpeeches = [
	{
		"author" : "Winston Churchill",
		"date" : 1940,
		"bce" : false
	},
	{
		"author" : "Ghandi",
		"date" : 1942,
		"bce" : false
	}, 
	{
		"author" : "Demosthenes",
		"date" : 342,
		"bce" : true
	}
];

var speechMath = [mySpeeches[1].date - mySpeeches[0].date];

window.onload = function() {
	console.log ("Ghandi's speech and Churchill's speech are " + speechMath + " years apart.");
};

document.getElementById('BtnDonate').addEventListener('click', function(){
	console.log ("There are " + mySpeeches.length + " speeches on the page.");
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
	console.log ("This speech was written by " + mySpeeches[0].author + " in " + mySpeeches[0].date + ". It is " + mySpeeches[0].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
	console.log ("This speech was written by " + mySpeeches[1].author + " in " + mySpeeches[1].date + ". It is " + mySpeeches[1].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
	console.log ("This speech was written by " + mySpeeches[2].author + " in " + mySpeeches[2].date + ". It is " + mySpeeches[2].bce + " that this year is B.C.E.");
  //Code in here executes when the user clicks the "Demosthenes" button.
});