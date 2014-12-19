//Charlie Pryor
//12/18/14

//totalValueFromArray([ "Boss", "MiniBoss", "hello","1", "17", 25,16, "45", "13","90", "gupta", "the", "dino","1000", "356", "2", 167,89, 14, "13000"]);
stringValueToNumberValue("312");

//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".



function stringValueToNumberValue (d) {
	
	var value = parseInt(d);
	
	return value;
}


function titleCaseString (c) {
	var originalNoChange = c.split(' ');
	
	// MAKEUP: nested loops in loops, deliverable 2
	//while there is a easier way to do this i decided to use the double nested loop for the makeup
	
	var fullSentence = "";
	for (var i = 0; i < originalNoChange.length; i++) {
   		 console.log(originalNoChange[i]);
   		 var word = originalNoChange[i];
   		 var firstLetter = word.charAt(0)
   		 //console.log(firstLetter);
   		 var firstUpper = firstLetter.toUpperCase();
   		 //console.log(firstUpper);
   		 var newWordWithUpperFirstLetter = firstUpper;
   		 for (var n = 1; n < word.length; n++) {
   		 	//console.log(word[n]);
   		 	newWordWithUpperFirstLetter += word[n];
   		 }
   		 console.log(newWordWithUpperFirstLetter);
   		 fullSentence += newWordWithUpperFirstLetter;
   		 fullSentence += " ";
	}
		console.log("NEW: ",fullSentence);
		console.log("old: ",c);


}

function isEmailAddress (a){
	var result = false;
	var sections = a.split('@');
	
	if (sections.length == 2) {
		if (sections[1].indexOf(".com") > -1) {
			
			result = true;
		
		}
		
	}

	return result;
}



function isPhoneNumber (b){
	var result = false;
	
	var sections = b.split('-');
	
	if(sections.length == 3) {
	
		console.log(sections[0]);
		//sections[0]
		var num1 = parseInt(sections[0]);
		var num2 = parseInt(sections[1]);
		var num3 = parseInt(sections[2]);
		if (num1 && num2 && num3) {
		
			if (sections[2].length == 4) {
				console.log("last is 4 digits");
				result = true;
				//is number everything is a number no characters and last is 4 in length
			}
		}
	}
	return result;
}