// pages/demo/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demos: [
      {
        title: '滑动切换',
        icon: '/images/demo/windows.png',
        url: '/pages/demo/demos/slidingswitch/slidingswitch'
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