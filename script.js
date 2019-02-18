var mySpeeches = [
	{
		"author" : "Winston Churchill",
		"date" : "June 18, 1940",
		"b.c.e." : false
	};
	{
		"author" : "Ghandi",
		"date" : "August 8, 1942",
		"b.c.e." : false
	}; 
	{
		"author" : "Demosthenes",
		"date" : "342 B.C.E.",
		"b.c.e." : true
	};
]

var speechMath = (mySpeeches[1] - mySpeeches[0]);

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