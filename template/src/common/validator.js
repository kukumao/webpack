/**
 * @description [在elemenui 基础上做的自定义验证集合]
 * @author  chenxilan 
 * @type {Object}
 */
var validators = {
	// 校验数字最大值
	maxNum: (rule, value, callback) => {
		var max = rule.param;
		var msg = rule.message || '请输入' + max + '以下的整数';
		if(!(/^[0-9]{0,9}$/.test(value)) || parseInt(value) > max) {
			callback(new Error(msg));
		} else {
			callback();
		}
	},
	// 校验浮点数最大值
	maxFloat: (rule, value, callback) => {
		var max = rule.param;
		var msg = rule.message || '请输入' + max + '以下的数字';

		if(!(/^[0-9]{0,9}$/.test(value)) || parseFloat(value) > max) {
			console.log(value)
			callback(new Error(msg));
		} else {
			callback();
		}
	},
	minFloat: (rule, value, callback) => {
		var min = rule.param;
		var msg = rule.message || '请输入' + min + '以下的数字';

		if(parseFloat(value) <= min) {
			callback(new Error(msg));
		} else {
			callback();
		}
	},

	// 校验数字最小值
	minNum: (rule, value, callback) => {

		var min = rule.param;
		var msg = rule.message || '请输入大于' + min + '的整数';
		if(!(/^[0-9]{0,9}$/.test(value)) || parseInt(value) <= min) {
			callback(new Error(msg));
		} else {
			callback();
		}
	},
	// 结束卡号不能小于开始卡号
	checkCards: (rule, value, callback) => {
		var min = rule.param;
		var msg = rule.message || '结束卡号不能小于或等于开始卡号';
		if(parseInt(value) <= min) {
			callback(new Error(msg));
		} else {
			callback();
		}
	},
	// 两位小数
	maxFloat: (rule, value, callback) => {
		var max = rule.param;
		var msg = rule.message || '请输入' + max + '以下的数字';
		if(!(/^\d+(\.\d{1,2})?$/.test(value)) || parseInt(value) > max) {
			callback(new Error(msg));
		} else {
			callback();
		}
	},

	// 检验时间----不能刚点击就检验
	daterangeRequire: (rule, value, callback) => {

		var msg = rule.message || "请选择时间范围";
		if(typeof value == 'object' && value.length == 2 && value[0] && value[1]) {
			callback();
		} else {
			callback(new Error(msg));
		}
	},
	price: (rule, value, callback) => {
		var msg1 = "金额只能为正整数或两位小数格式";
		var msg2 = "金额必须大于0";
//		var msg3 = "请输入小于或等于999999.99的值";
		var r = /^\d+(\.\d{1,2})?$/;
　
       
		if(value) {
			if(!r.test(value)) {
				callback(new Error(msg1));
			} else if(value <= 0) {
				callback(new Error(msg2));
			} else {
				callback();
			}
			
		} else {
			callback();
		}

	},
	rangeTime: (rule, value, callback) => {
		var  rangeRule = rule.param;
		var msg = '请选择时间';
		if(rangeRule==1){
			callback();
		}else{
			if(value.length ==2 && value[0]==null){
				callback(new Error(msg));
			}else if(value.length==0){
				callback(new Error(msg));
				
			}else{
				callback();
			}
		}
	}

}

export default validators;