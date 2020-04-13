// miniprogram/pages/my_collect_page/my_collect_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      myCollectList:[
        {
          url: "#",
          type: "book",
          src: "https://img.alicdn.com/imgextra/i2/1614846122/TB1N.2Dn4GYBuNjy0FnXXX5lpXa_!!0-item_pic.jpg_430x430q90.jpg",
          title: "数据结构 严蔚敏 数据结构 c语言版 严蔚敏 数据结构与算法 数据结构和算法习题 c语言数据结构 清华大学出版社",
          price: 28.00
        },
        {
          url: "#",
          type: "book",
          src: "https://img.alicdn.com/imgextra/i2/2451699564/O1CN012KWMRNidK6DctvU_!!0-item_pic.jpg_430x430q90.jpg",
          title: "鸟哥的Linux私房菜 基础学习篇第四版 linux操作系统教程从入门到精通书籍 鸟叔第4版计算机数据库编程shell技巧内核命令教程书籍",
          price: 86.80
        },
        {
          url: "#",
          type: "book",
          src: "https://img.alicdn.com/imgextra/i1/1049653664/TB19sxqveuSBuNjy1XcXXcYjFXa_!!0-item_pic.jpg_430x430q90.jpg",
          title: "正版c++ primer plus 第6版中文版C++语言从入门到精通 零基础自学C语言程序设计编程游戏书 计算机程序开发数据结构基础教程书籍",
          price: 89.30
        }
      ]
  },

  getList: function(sessionId, from, limit) {
    let that = this;
    wx.request({
      url: '#/get_collect',
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
        url: '#/get_collect',
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
            myCollectList: response.data.list,
          });
        }
      });
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
      url: '#/remove/myCollect',
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