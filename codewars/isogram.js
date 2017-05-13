function isIsogram(str) {

	var ss = str.toLowerCase().split("");
	var char = ss[0];
	for(var i=0; i < ss.length; i++) {
		for(var j=i+1; j < ss.length; j++) {
			if(ss[i] === ss[j]) {
				return false;
			}
		}
	}

	return true;

}

console.log(isIsogram("Dermatoglyphicss"));