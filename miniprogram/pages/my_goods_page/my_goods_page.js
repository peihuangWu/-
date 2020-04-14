// miniprogram/pages/my_goods_page/my_goods_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    sessionId: "",
    myGoodsList:[
      {
        id: "#",
        type: "snacks",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        id: "#",
        type: "snacks",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      }
    ],
  },

  getList: function(sessionId, from, limit) {
    let that = this;
    wx.request({
      url: '#/get_myGoods',
      method:"POST",
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "sessionId": sessionId,
        "from": from, 
        "limit": limit
      },
      success: function(response) {
        that.setData({
          myGoodsList: response.data.list,
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this;
      that.setData({
        "page": parseInt(options.page) - 1,
        "sessionId": options.sessionId
      });
      wx.request({
        url: '#/get_myGoods',
        method:"POST",
        header: {
          "Content-Type": "application/json"
        },
        data: {
          "sessionId": that.data.sessionId,
          "from": that.data.page * 10, 
          "limit": 10
        },
        success: function(response) {
          that.setData({
            myGoodsList: response.data.list,
          });
        }
      });
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

  scrollToLower: function(e) {
    let that = this;
    that.setData({
      "page": parseInt(that.data.page) + 1
    });
    that.getList(that.data.sessionId, that.data.page * 10, 10);
  },

  scrollToUpper: function(e) {
      let that = this;
      if (parseInt(that.data.page) <= 0) return;
      that.setData({
        "page": parseInt(that.data.page) - 1
      });
      that.getList(that.data.sessionId, that.data.page * 10, 10);
  },

  cancel: function(e) {
    let that = this;
    wx.request({
      url: '#/remove/myGoods',
      method:"POST",
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "sessionId": that.data.sessionId,
        "type": e.currentTarget.dataset['type'],
        "id": e.currentTarget.dataset["id"],
      },
      success: function(response) {
        that.setData({
          myGoodsList: response.data.list,
        });
      }
    });
  },
})