import { emitBus, busName } from './bus'
let isFirst = true // 是否第一次进入路由

// 路由跳转前钩子
export const routerBeforeEach = (to, from, next) => {
	if(!isFirst) {
		emitBus(busName.showLoading, true)
	} else {
		isFirst = false
	}
	next()
}

// 路由跳转后钩子
export const routerAfterEach = (to) => {
	emitBus(busName.showLoading, false)
}

// 返回组合数组
export const getKeyArray = (items, key) => {
	let rs = []
	for(let i = items.length - 1; i >= 0; i--) {
		if(items[i].hasOwnProperty(key)) {
			rs.push(items[i][key])
		}
	}
	return rs
}

// 返回日期格式
export const dateFtt = (date, fmt) => {
	if(!date) {
		return
	}
	var o = {
		'M+': date.getMonth() + 1, // 月份
		'd+': date.getDate(), // 日
		'h+': date.getHours(), // 小时
		'm+': date.getMinutes(), // 分
		's+': date.getSeconds(), // 秒
		'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
		'S': date.getMilliseconds() // 毫秒
	}
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
		for(let k in o) {
			if(new RegExp('(' + k + ')').test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
			}
		}
		return fmt
	}
}

/**
 * 过滤器
 * @type {Object}
 */
export const filters = {
	/**
	 * 对数字进行处理
	 * 如 19000  -》 190，00
	 */
	number: function(value) {
		if(!value) return ''
		value = value + ''
		value = value.replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
		return value
	},
	/**
	 * 日期过滤器
	 * @param  {[type]} date 需要过滤的数据
	 * @param  {[type]} type 过滤类型, 'DATE' :过虑结果为日期
	 * @return {[type]}      [description]
	 */
	date: function(date, type) {
		if(!date) {
			return ''
		}
		if(typeof date === 'number') {
			date = new Date(date)
		} else {
			return date
		}
		let y = date.getFullYear()
		let m = date.getMonth() + 1
		let d = date.getDate()
		if(type !== 'DATE') {
			return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + date.toTimeString().substr(0, 5)
		} else {
			return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
		}
	},

	// 返回yyyy-mm-dd
	dates: function(date, type) {
		if(!date) {
			return ''
		}

		if(typeof date === 'number') {
			date = new Date(date)
		} else if(toString.call(date) === '[object Date]') {
			console.log(date)
			// date = date
		} else {
			return date
		}
		let y = date.getFullYear()
		let m = date.getMonth() + 1
		let d = date.getDate()
		if(type !== 'DATE') {
			return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
		} else {
			return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
		}
	},
	// 返回yyyy-mm-dd hh:mm:ss
	formatTime(time) {
		let date = new Date(time);
		let [year, month, day, hour, minute, second] = [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()];
		if(month < 10) month = '0' + month;
		if(day < 10) day = '0' + day;
		if(hour < 10) hour = '0' + hour;
		if(minute < 10) minute = '0' + minute;
		if(second < 10) second = '0' + second;
		let value = year + '-' + month + "-" + day + ' ' + hour + ':' + minute + ':' + second;
		return value;
	},

	/**
	 * 丢掉 ‘_’开头的参数
	 * 并把 abc__list[]-》{a,b,c}(以逗号隔开)
	 * 过滤空参数
	 * zz_开始的为日期对象，处理为毫秒后，属性名去掉zz
	 */
	filterParam(pm) {
		let rsPm = {}
		for(let key in pm) {
			if(pm[key] && pm[key] !== '' && key !== 'total') {
				if(key.indexOf('__') > 0) {
					// TODO 改用正则
					if(pm[key].length > 0) {
						// book__list =[1,2] ==> book='{1,2}';
						rsPm[key.substring(0, key.indexOf('__'))] = pm[key].join(',')
					}
				} else if(key.startsWith('_')) {
					continue
				} else if(key.startsWith('zz_')) {
					// zz开始的为日期对象，处理为毫秒后，属性名去掉zz
					rsPm[key.substring(3)] = typeof pm[key] === 'number' ? pm[key] : pm[key].getTime()
				} else {
					rsPm[key] = pm[key]
				}
				// delete pm[key]
			}
		}
		return rsPm
	}
}

// 判断是否是字符串
export const isString = (val) => {
	return toString.call(val) === '[object String]'
}

//返回随机数
export const getUuid = (len) => {
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
		uuid = [],
		i;

	if(len) {
		for(i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * chars.length];
	} else {
		var r;
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';
		for(i = 0; i < 36; i++) {
			if(!uuid[i]) {
				r = 0 | Math.random() * 16;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	return uuid.join('');
}
