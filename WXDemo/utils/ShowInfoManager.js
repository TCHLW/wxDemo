/**
 * @desc    提示用户信息类封装
 */

//显示模态对话框
function showInfoManagerWithModel(title, content, showCancel, cancelText, confirmText) {
  wx.showModal({
    title: title,//提示的内容
    content: content,
    showCancel: showCancel,//是否显示取消按钮
    cancelText: cancelText,//取消按钮的文字，最多 4 个字符
    cancelColor: '#000000',//取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
    confirmText: confirmText,//确认按钮的文字，最多 4 个字符
    confirmColor: '#576B95',//确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
    mask: true,//是否显示透明蒙层，防止触摸穿透
    success: function (res) { 
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    },//接口调用成功的回调函数
    fail: function (res) { },//接口调用失败的回调函数
    complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
  })
}

//显示消息提示框
function showInfoManagerWithToast(title, icon) {
  wx.showToast({
    title: title,//提示的内容
    icon: icon,//图标
    // image: image,//自定义图标的本地路径，image 的优先级高于 icon
    duration: 2000,//提示的延迟时间
    mask: true,//是否显示透明蒙层，防止触摸穿透
    success: function (res) { },//接口调用成功的回调函数
    fail: function (res) { },//接口调用失败的回调函数
    complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
  })
}

//隐藏消息提示框
function hideInfoManagerWithToast() {
  wx.hideToast()
}

//显示 loading 提示框
function showInfoManagerWithLoading(title) {
  wx.showLoading({
    title: title,//提示的内容
    mask: true,//是否显示透明蒙层，防止触摸穿透
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
}

//隐藏 loading 提示框
function hideInfoManagerWithLoading() {
  wx.hideLoading()
}

module.exports = {
  showInfoManagerWithLoading,
  hideInfoManagerWithLoading,
  showInfoManagerWithToast,
  hideInfoManagerWithToast,
  showInfoManagerWithModel,
}