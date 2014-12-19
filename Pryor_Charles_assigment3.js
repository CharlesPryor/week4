//Charlie Pryor
//12/18/14

isEmailAddress("cep21@me.com");



function isEmailAddress (a){
	var result = false;
	var sections = a.split('@');
	
	if



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