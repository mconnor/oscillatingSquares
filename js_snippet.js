if (typeof Object.create !== 'function') { 
	Object.create = functinon (o) {
		var F = function() {};
		F.prototype = o;
		return new F();
	};
	
}



Function.prototype.bind = function () {
		var fn = this, 
			args = Array.prototype.slice.call(arguments),
			object = args.shift();
		return function() {
			return fn.apply(object,
				args.concat(Array.prototype.slice.call(arguments)));
		};
	};
	
Function.prototype.curry = function () {
		var fn = this, 
			args = Array.prototype.slice.call(arguments);
		return function() {
			return fn.apply(this,
				args.concat(Array.prototype.slice.call(arguments)));
		};
};

String.prototype.csv = String.prototype.split.partial(/,\s*/);
 
  var results = "John, Resig, Boston".csv();
  alert( (results[1] == "Resig") + " The text values were split properly" );