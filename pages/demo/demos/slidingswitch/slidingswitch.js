// pages/demo/demos/slidingswitch/slidingswitch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    tabs: [
      {
        title: 'tab_0',
        content: [
          {
            name: 'tabContent_0_0'
          },
          {
            name: 'tabContent_0_1'
          },
          {
            name: 'tabContent_0_2'
          },
          {
            name: 'tabContent_0_3'
          },
        ]
      },
      {
        title: 'tab_1',
        content: [
          {
            name: 'tabContent_1_0'
          },
          {
            name: 'tabContent_1_1'
          },
          {
            name: 'tabContent_1_2'
          },
          {
            name: 'tabContent_1_3'
          },
          {
            name: 'tabContent_1_4'
          },
          {
            name: 'tabContent_1_5'
          }
        ]
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
  swichNav: function (e) {
    var current = e.currentTarget.dataset.current;
    if (this.data.currentTaB != current) {
      this.setData({
        currentTab: current
      })
    }
  },
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
  }
})