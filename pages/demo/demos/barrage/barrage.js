// pages/demo/demos/barrage/barrage.js
var page = undefined

Page({

  /**
   * 页面的初始数据
   */
  data: {
    barrages: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    page = this
    wx.setNavigationBarTitle({
      title: options.title
    })
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
    barrages = []
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
   * 自定义
   */
  getRandomColor: function () {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  },

  addBarrage: function () {
    barrages.push(new Barrage('我是弹幕呀_', Math.ceil(Math.random() * 100), Math.ceil(Math.random() * 5 + 5), this.getRandomColor()))
    this.setData({
      barrages: barrages
    })
  }
})

var barrages = []
var i = 0
class Barrage {
  constructor(text, top, time, color) {
    this.text = text + i
    this.top = top
    this.time = time
    this.color = color
    this.display = true
    let that = this
    this.id = i++
  }
}