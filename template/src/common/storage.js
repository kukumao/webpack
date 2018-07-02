// 常量存储名
export const storageName = {
}

// localstorage
export function addLocalStorage (key, value) {
  try {
    let storage = window.localStorage
    storage.setItem(key, JSON.stringify(value || null))
  } catch (e) {
    console.warn('localStorage异常', e)
  }
}

export function getLocalStorage (key) {
  let value
  try {
    let storage = window.localStorage
    let item = storage.getItem(key)
    value = JSON.parse(item || null)
  } catch (e) {
    console.warn('localStorage异常', e)
  }

  return value
}

// sessionstorage
export function addSessionStorage (key, value) {
  try {
    let storage = window.sessionStorage
    storage.setItem(key, JSON.stringify(value || null))
  } catch (e) {
    console.warn('sessionStorage异常', e)
  }
}

export function getSessionStorage (key) {
  let value
  try {
    let storage = window.sessionStorage
    let item = storage.getItem(key)
    value = JSON.parse(item || null)
  } catch (e) {
    console.warn('sessionStorage异常', e)
  }

  return value
}

// cookie
export function getCookie (name) {
  let nameEQ = name + '='
  let ca = document.cookie.split(';') // 把cookie分割成组
  let c
  for (let i = 0; i < ca.length; i++) {
    c = ca[i] // 取得字符串
    while (c.charAt(0) === ' ') { // 判断一下字符串有没有前导空格
      c = c.substring(1, c.length) // 有的话，从第二位开始取
    }
    if (c.indexOf(nameEQ) === 0) { // 如果含有我们要的name
      return unescape(c.substring(nameEQ.length, c.length)) // 解码并截取我们要值
    }
  }
  return false
}

export function clearCookie (name) {
  setCookie(name, '')
}

export function setCookie (name, value, seconds) {
  seconds = seconds || 0 // seconds有值就直接赋值，没有为0
  var expires = ''
  if (seconds !== 0) { // 设置cookie生存时间
    var date = new Date()
    date.setTime(date.getTime() + (seconds * 1000))
    expires = '; expires=' + date.toGMTString()
  }
  // 转码并赋值
  document.cookie = name + '=' + escape(value) + expires + '; path=/'
}

export default {
  storageName,
  addLocalStorage,
  getLocalStorage,
  addSessionStorage,
  getSessionStorage,
  getCookie,
  clearCookie,
  setCookie
}
