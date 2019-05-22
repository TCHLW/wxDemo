
const requester = require('RequestManager.js')
 const apiPath = require('ApiPathManager.js')

function dologinUserInfo(url,securityCode, tel, sourceObj, successFun, failFun){
  var params = {
    username: securityCode,
    password: tel,
  }
  requester.requestPostApi(apiPath.loginInfoUrl, params, sourceObj, successFun, failFun)
}

module.exports = {
  dologinUserInfo
}
