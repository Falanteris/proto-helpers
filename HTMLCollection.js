	HTMLCollection.prototype.extractByClassName = function(name) {
		// body...
		let select
		
		for (var i = this.length - 1; i >= 0; i--) {
   			if(this.item(i).classList.contains(name)){
   				select = this.item(i);
   			}
   		}
   		return select
	};
	HTMLCollection.prototype.extractById = function(name) {
		// body...
		let select
		
		for (var i = this.length - 1; i >= 0; i--) {
   			if(this.item(i).id == name){
   				select = this.item(i);
   			}
   		}
   		return select
	};
	HTMLCollection.prototype.extractByTagName = function(tagname) {
		// body...
		var htmlElem = [];
		for (var i = this.length - 1; i >= 0; i--) {
   			if(this.item(i).nodeName == tagname.toUpperCase()){
   				htmlElem.push(this.item(i))
   				
   			}
   		}
   		return htmlElem;
	};
