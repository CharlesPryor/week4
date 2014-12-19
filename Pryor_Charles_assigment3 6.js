//Charlie Pryor
//12/18/14

//totalValueFromArray([ "Boss", "MiniBoss", "hello","1", "17", 25,16, "45", "13","90", "gupta", "the", "dino","1000", "356", "2", 167,89, 14, "13000"]);
isPhoneNumber("718-239-1741");

//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".




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