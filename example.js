function func(){
	console.log('func');
}

////////////////////////////////////////////////////

var func_2 = function(){
	console.log('func_2');
}

const func_const = function(){
	console.log('func_const');
}

let func_let = function(){
	console.log('func_let');
}

////////////////////////////////////////////////////

Exam = {
	func_obj:function(){
		console.log('func_obj');
	}
};

////////////////////////////////////////////////////

class func_class{
	func_c(){
		console.log('func_class');
	}
}

func();
func_2();
func_const();
func_let();
Exam.func_obj();
Exam['func_obj']();
let func_c = new func_class();
func_c.func_c();
func_c['func_c']();