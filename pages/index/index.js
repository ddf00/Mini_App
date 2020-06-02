// pages/index/index.js
// Page: 注册小程序页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '获取用户数据',
    flag: false,
    userInfo: {}
  },

  handleParent() {
    // wx.navigateTo({
    //   url: '/pages/log/log',
    // });
    wx.redirectTo({
      url: '/pages/log/log',
    });
  },

  handleGetuserInfo(data) {
    console.log(data)
    if (data.detail.userInfo) {
      this.setData({
        userInfo: data.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setTimeout(() => {
    //   this.setData({
    //     msg: '修改后的数据'
    //   })
    // }, 1000);

    // 获取用户信息
    wx.getUserInfo({
      success: (res)=>{
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: ()=>{
        console.log("获取用户信息失败")
      }
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

  }
})