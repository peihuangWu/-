// miniprogram/pages/one_message_page/one_message_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      sessionId: "",
      id: "",
      content:"恭喜您绑定成功啦，感觉去看看有什么想做的吧~"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({
      "sessionId": options.sessionId,
      "id": options.id,
    });
    wx.request({
      url: '#/get_msg',
      method:"POST",
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "sessionId": that.data.sessionId,
        "id": that.data.id
      },
      success: function(response) {
        that.setData({
          "content": response.data.content,
        });
      }
    });
  },
})