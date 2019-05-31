//index.js
//获取应用实例
const apiPath = require('../../utils/ApiPathManager.js')
const userInfoManager = require('../../utils/UserInfoManager.js')
const showInfoManager = require('../../utils/ShowInfoManager.js')
const app = getApp()
var timer; // 计时器

Page({


  
  data: {
    detail: '我是谁  我在哪',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
    // Countdown();
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    // 用户触发了下拉刷新操作
    // 拉取新数据重新渲染界面
    // showInfoManager.showInfoManagerWithLoading('加载中',true)
    // showInfoManager.showInfoManagerWithToast('接口访问成功','')
    showInfoManager.showInfoManagerWithModel('温馨提示', '您有一个包裹请注意查收', true, '取消','确定')
    // userInfoManager.dologinUserInfo(apiPath.loginInfoUrl, '134679', '13012818701', this, this.successFun, this.failFun)
    userInfoManager.studentCourseOrderInfo('1', '0', '1', '1', this, this.successFun, this.failFun)
  },

  onReachBottom: function () {
    // 当界面的下方距离页面底部距离小于100像素时触发回调
    userInfoManager.dologinUserInfo(apiPath.loginInfoUrl, '134679', '13012818701', this, this.successFun, this.failFun)
  },

  //事件处理函数
  bindTimeOutTap: function () {
    console.log("----Countstop----");
    console.log(apiPath.loginInfoUrl);
    clearTimeout(timer);
  },

  bindDetailTap:function(){
    wx.navigateTo({
      url: '../test/test?id=666'
    })
  },
  onLoad: function () {


    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
    // userInfoManager.dologinUserInfo(apiPath.loginInfoUrl, 'root', 'root', this, this.successFun, this.failFun)
    userInfoManager.studentDologinUserInfo('18916612959', this, this.successFun, this.failFun)

  },

  /**
      * 接口调用成功处理
      */
  successFun: function (res, selfObj) {
    this.setData({
      // motto: res.result.companyAbbreviation,
    })
    try {
      wx.setStorageSync('token', res.data.token)
    } catch (e) { }
    wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。
    wx.hideNavigationBarLoading() //完成停止加载
    // showInfoManager.hideInfoManagerWithLoading()
    console.log('successFun', res)
  },

  /**
   * 接口调用失败处理
   */
  failFun: function (res, selfObj) {
    console.log('failFun', res)
  },

  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

// 倒计时
function Countdown() {
  timer = setTimeout(function () {
    console.log("----Countdown----");
    console.log(apiPath.loginInfoUrl);
    Countdown();
  }, 1000);
}
