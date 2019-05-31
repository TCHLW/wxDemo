
const requester = require('RequestManager.js')
const apiPath = require('ApiPathManager.js')

function dologinUserInfo(url,securityCode, tel, sourceObj, successFun, failFun){
  var params = {
    username: securityCode,
    password: tel,
  }
  requester.requestPostApi(apiPath.loginInfoUrl, params, sourceObj, successFun, failFun)
}

function studentDologinUserInfo(linkPhone, sourceObj, successFun, failFun) {
  var params = {
    linkPhone: linkPhone,
  }
  requester.requestPostApi(apiPath.studentLoginInfoUrl, params, sourceObj, successFun, failFun)
}

function studentCourseOrderInfo(sid, courseStatus, pageSize, pageNum, sourceObj, successFun, failFun) {
  var params = {
    sid: sid,
    uid: '1',
    courseStatus: courseStatus,
    pageSize: pageSize,
    pageNum: pageNum,
  }
  requester.requestPostApi(apiPath.studentCourseOrderUrl, params, sourceObj, successFun, failFun)
}

module.exports = {
  dologinUserInfo,
  studentCourseOrderInfo,
  studentDologinUserInfo
}
