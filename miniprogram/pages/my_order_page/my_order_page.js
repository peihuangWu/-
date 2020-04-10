// miniprogram/pages/my_order_page/my_order_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    completedOrders: [
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i2/1614846122/TB1N.2Dn4GYBuNjy0FnXXX5lpXa_!!0-item_pic.jpg_430x430q90.jpg",
        title: "数据结构 严蔚敏 数据结构 c语言版 严蔚敏 数据结构与算法 数据结构和算法习题 c语言数据结构 清华大学出版社",
        price: 28.00
      },
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i2/2451699564/O1CN012KWMRNidK6DctvU_!!0-item_pic.jpg_430x430q90.jpg",
        title: "鸟哥的Linux私房菜 基础学习篇第四版 linux操作系统教程从入门到精通书籍 鸟叔第4版计算机数据库编程shell技巧内核命令教程书籍",
        price: 86.80
      },
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i1/1049653664/TB19sxqveuSBuNjy1XcXXcYjFXa_!!0-item_pic.jpg_430x430q90.jpg",
        title: "正版c++ primer plus 第6版中文版C++语言从入门到精通 零基础自学C语言程序设计编程游戏书 计算机程序开发数据结构基础教程书籍",
        price: 89.30
      },
    ],
    payedOrders: [
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      },
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
      },
    ],
    unpayedOrders: [
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      },
      {
        url: "#",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
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