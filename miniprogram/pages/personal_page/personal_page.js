// miniprogram/pages/personal_page/personal_page.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sessionId:"",
    myGoodsList:[
      {
        id: "#",
        type:"snacks",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        id: "#",
        type:"snacks",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      }
    ],
    myCollectList:[
      {
        id: "#",
        type:"snacks",
        src: "https://img.alicdn.com/imgextra/i2/1614846122/TB1N.2Dn4GYBuNjy0FnXXX5lpXa_!!0-item_pic.jpg_430x430q90.jpg",
        title: "数据结构 严蔚敏 数据结构 c语言版 严蔚敏 数据结构与算法 数据结构和算法习题 c语言数据结构 清华大学出版社",
        price: 28.00
      },
      {
        id: "#",
        type:"snacks",
        src: "https://img.alicdn.com/imgextra/i2/2451699564/O1CN012KWMRNidK6DctvU_!!0-item_pic.jpg_430x430q90.jpg",
        title: "鸟哥的Linux私房菜 基础学习篇第四版 linux操作系统教程从入门到精通书籍 鸟叔第4版计算机数据库编程shell技巧内核命令教程书籍",
        price: 86.80
      },
      {
        id: "#",
        type:"snacks",
        src: "https://img.alicdn.com/imgextra/i1/1049653664/TB19sxqveuSBuNjy1XcXXcYjFXa_!!0-item_pic.jpg_430x430q90.jpg",
        title: "正版c++ primer plus 第6版中文版C++语言从入门到精通 零基础自学C语言程序设计编程游戏书 计算机程序开发数据结构基础教程书籍",
        price: 89.30
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this;
      if (app.globalData.status == 1) {
        wx.showModal({
          title: '系统提醒',
          content: '您还未绑定，请先前往绑定',
          success: function (res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: '../bind_page/bind_page',
                })
              }else{
                wx.navigateBack({
                  delta: -1
                });
              }
          }
      })
    }
    that.setData({
      "sessionId": app.globalData.sessionId,
    });

    wx.request({
      url: '#/get_myGoods',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "sessionId": that.data.sessionId,
        "from": 0, 
        "limit": 3
      },
      success: function(response) {
        that.setData({
          myGoodsList:response.data.list,
        });
      }
    });

    wx.request({
      url: '#/get_collect',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "sessionId": that.data.sessionId,
        "from": 0, 
        "limit": 3
      },
      success: function(response) {
        that.setData({
          myCollectList:response.data.list,
        });
      }
    });
  },
})