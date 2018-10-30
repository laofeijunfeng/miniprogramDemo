// pages/me/functions/works/works.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    works: [
      {
        title: '零氪斯企业官网',
        image: 'http://p98bo6q4s.bkt.clouddn.com/FuX0IijCOtoqQ9C35Bbs5ryEIB_N',
        qrcode: 'http://p98bo6q4s.bkt.clouddn.com/FjUz7b9YeukGlH69ShVw5s81lTw0'
      }
    ],
    currentItemId: 0
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
  swiperChange: function (e) {
    var currentItemId = e.detail.currentItemId;
    this.setData({
      currentItemId: currentItemId
    })
  },

  clickChange: function (e) {
    var itemId = e.currentTarget.dataset.itemId;
    this.setData({
      currentItemId: itemId
    })
  },

  viewQrcode: function () {
    var works = this.data.works
    var currentItemId = this.data.currentItemId
    wx.previewImage({
      urls: [works[currentItemId].qrcode]
    })
  }
})