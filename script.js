var mySpeeches = [
	{
		"author" : "Winston Churchill",
		"date" : 1940,
		"b.c.e." : false
	},
	{
		"author" : "Ghandi",
		"date" : 1942,
		"b.c.e." : false
	}, 
	{
		"author" : "Demosthenes",
		"date" : 342,
		"b.c.e." : true
	}
];

var speechMath = [mySpeeches[1].date - mySpeeches[0].date];

function myFunction() {
	console.log ("Ghandi's speech and Churchill's speech are " + speechMath + " years apart.");
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
});