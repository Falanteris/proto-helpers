String.prototype.isAlpha = function() {
	var alpha = true;
	var Alpha = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var explode = this.split("");
	explode.forEach((item) => {
		if(Alpha.indexOf(item.toLowerCase()) == -1){

			alpha = false;
		}
	})
	return alpha;
};
String.prototype.isNumeric = function() {
	var alpha = true;
	var Alpha = [1,2,3,4,5,6,7,8,9,0]
	var explode = this.split("");
	explode.forEach((item) => {
		if(Alpha.indexOf(parseInt(item))==-1){
			alpha = false;
		}
	})
	return alpha;
};
String.prototype.isAlNum = function(){
	// body...
	var alphanumeric = false;
	
	var Alpha = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var Num = [1,2,3,4,5,6,7,8,9,0]
	var explode = this.split("");
	var alpha = false;
	var num = false;
	explode.forEach((item) => {
	
		if(Alpha.indexOf(item.toLowerCase()) != -1){
			alpha = true;
		}

		if(Num.indexOf(parseInt(item)) != -1){
			num = true;
		}
	})
	if(alpha && num){
		alphanumeric =true;
	}
	console.log(alphanumeric)
	return alphanumeric;
};
String.prototype.checkUpper = function() {
	// body...
	var explode = this.split("");
	var containsUpper = false; 
	for (var i = explode.length - 1; i >= 0; i--) {
			if(explode[i].toLowerCase() != explode[i]){
				
				containsUpper = true;
			}
		}	
	console.log(containsUpper)
	return containsUpper;	
};

String.prototype.checkLower = function() {
	// body...
	var explode = this.split("");
	var containsLower = false; 
	for (var i = explode.length - 1; i >= 0; i--) {
			if(explode[i].toUpperCase() != explode[i]){
				containsLower = true;
			}
		}

	return containsLower;

};
String.prototype.fullAnalysis = function(){
var report = {}
report.alpha = this.isAlpha();
report.numeric = this.isNumeric();
report.alphanumeric = this.isAlNum();
report.containsLower = this.checkLower();
report.containsUpper = this.checkUpper();
return report
}
