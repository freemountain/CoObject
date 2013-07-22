import {$$} from "jtypes-2.1.0";

var CoClass = $$(function()
{
},
{
	'static create': function(){
		//Apply arguments to Constructor
		//http://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible/#1608546

		return new (Function.prototype.bind.apply(this, arguments));
	},
	'static extend': function(field, methods){
		//jtypes will einen constructor
		var constructor = function(){
			this.__base.apply(this,arguments);
		};
		var prototype = {};
		var keywords = {
			'+' : 'public',
			'-' : 'private',
			'#' : 'protected'
		};

		if(methods.hasOwnProperty('init')){
			constructor = methods.init;
			delete methods.init;
		}


		var member = [field, methods];
		for(var i = 0;i<2;i++){
			for(var key in member[i]){
				var modifier = key.substring(0,1);
				var name = key.substring(1);
				console.log(modifier);
				if (member[i].hasOwnProperty(key) && keywords.hasOwnProperty(modifier)){
					console.log("yo");
					prototype[keywords[modifier]+' '+name] = member[i][key];
				}
			}
		}
		console.log(prototype);

		//static wird wohl nicht vererbt
		prototype['static create'] = CoClass.create;
		prototype['static extend'] = CoClass.extend;
		
		return $$(this,constructor,prototype);
	}
});

export CoClass;
