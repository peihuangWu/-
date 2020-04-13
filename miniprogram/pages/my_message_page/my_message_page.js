// miniprogram/pages/my_message_page/my_message_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sessionId: "",
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
    let that = this;
    that.setData({
      "sessionId": options.sessionId,
    });

    wx.request({
      url: '#/get_msg_list',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "sessionId": that.data.sessionId,
      },
      success: function(response) {
        that.setData({
          "messages": response.data.list,
        });
      }
    });
  },
})