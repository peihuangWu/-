// miniprogram/pages/goods_detail_page/goods_detail_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_collect:0,
    slider: [
        "https://img.alicdn.com/imgextra/i1/2049420857/O1CN018TI9Ax1ICXy2iGY3H_!!2049420857.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/1614846122/TB1N.2Dn4GYBuNjy0FnXXX5lpXa_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i2/2451699564/O1CN012KWMRNidK6DctvU_!!0-item_pic.jpg_430x430q90.jpg",
        "https://img.alicdn.com/imgextra/i1/1049653664/TB19sxqveuSBuNjy1XcXXcYjFXa_!!0-item_pic.jpg_430x430q90.jpg",
    ],
    swiperCurrent: 0,
    id:"#",
    type:"book",
    title: "C primer plus 第6版中文版 C语言程序设计从入门到精通零基础自学C语言编程教材书计算机程序开发数据结构教程书籍C++primer plus",
    num:10,
    price: 59.80,
    sellerId:"#",
  },

  collect: function(e) {
    let that = this;

    if (that.data.is_collect == 0) {
        wx.request({
          url: '#/collect',
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
              "is_collect": 1,
            });
          }
        });
    } else {
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
              "is_collect": 0,
            });
          }
        });
    }
  },

  
})