// miniprogram/pages/about_ seller_page/about_seller_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sellerId: "#",
    nickname:"大可爱",
    gender:"男",
    college:"软件学院",
    birthday:"1996年12月",
    signature:"放手去试，船到桥头自然直。放手去试，船到桥头自然直。放手去试，船到桥头自然直。",
    goodsList:[
        {
          src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
          title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
          price: 109.00,
          num:2
        },
        {
          src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
          title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
          price: 49.00,
          num:1
        },
        {
          src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
          title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
          price: 31.90,
          num:1
        }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that = this;
      that.setData({
        "sellerId": options.sellerId
      });
      wx.request({
        url: '#/about_seller',
        method:"POST",
        header: {
          "Content-Type": "application/json"
        },
        data: {
          "sellerId": that.data.sellerId,
        },
        success: function(response) {
          that.setData({
            "nickname": response.data.nickname,
            "gender": response.data.gender,
            "college": response.data.college,
            "birthday": response.data.birthday,
            "signature": response.daata.signature,
            "goodsList": response.data.goodsList
          });
        }
      });
  },
})