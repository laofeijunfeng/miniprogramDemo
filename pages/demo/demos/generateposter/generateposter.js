// pages/demo/demos/generateposter/generateposter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
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
  generatePoster: function () {
    this.createNewImg()
  },
  createNewImg: function () {
    var that = this;
    var context = wx.createCanvasContext('mycanvas');
    context.setFillStyle("#ffffff")
    context.fillRect(0, 0, 375, 667)

    var name = '老肥俊锋'
    context.setFontSize(20)
    context.setFillStyle('#2c2c2c')
    context.setTextAlign('left')
    context.fillText(name, 150, 75)
    context.stroke()

    var address = '广东 | 揭阳'
    context.setFontSize(15)
    context.setFillStyle('#2c2c2c')
    context.setTextAlign('left')
    context.fillText(address, 150, 100)
    context.stroke()

    var userInfo = [
      '职业：web 开发程序员',
      '工作地址：广东深圳',
      '邮箱：laofeijunfeng@163.com'
    ]
    for (var index in userInfo) {
      context.setFontSize(15)
      context.setFillStyle('#2c2c2c')
      context.setTextAlign('left')
      context.fillText(userInfo[index], 75, 200 + index * 30)
      context.stroke()
    }

    var qrcode = '/images/qrcode.jpg'
    context.drawImage(qrcode, 270, 490, 80, 80);

    var descp = '长按生成名片'
    context.setFontSize(10)
    context.setFillStyle('#2c2c2c')
    context.setTextAlign('center')
    context.fillText(descp, 310, 580)
    context.stroke()

    context.arc(75, 75, 50, 0, 2 * Math.PI)
    context.strokeStyle = "#ffe200"
    context.clip()
    var avatar = '/images/avatar.jpg'
    context.drawImage(avatar, 25, 25, 100, 100)
    
    context.draw()

    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        that.setData({
          imagePath: tempFilePath
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
  }
})