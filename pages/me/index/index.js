// pages/me/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    functions: [
      {
        icon: '/images/me/works.png',
        title: '个人作品',
        url: '/pages/me/functions/works/works'
      },
      {
        icon: '/images/me/wechat.png',
        title: '个人微信',
        url: '/pages/me/functions/wechat/wechat'
      },
      {
        icon: '/images/me/feedback.png',
        title: '建议反馈',
        url: '/pages/me/functions/feedback/feedback'
      },
      {
        icon: '/images/me/updatelog.png',
        title: '更新日志',
        url: '/pages/me/functions/log/log'
      },
      {
        icon: '/images/me/version.png',
        title: '关于版本',
        url: '/pages/me/functions/version/version'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 自定义方法
   */
  gotopage: function (e) {
    var url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url
    })
  }
})