// miniprogram/pages/my_message_page/my_message_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messages:[
      {
        "type": 1,    //消息类型
        "hasRead": 0, //0代表未读，1代表已读
        "id": 123456789 //消息id
      },
      {
        "type": 2,    //消息类型
        "hasRead": 1, //0代表未读，1代表已读
        "id": 123456789 //消息id
      },
      {
        "type": 3,    //消息类型
        "hasRead": 1, //0代表未读，1代表已读
        "id": 123456789 //消息id
      },
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

  }
})