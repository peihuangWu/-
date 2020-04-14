// miniprogram/pages/goods_list_page/goods_list_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:"",
    type: "",
    page: 1,
    value: "",
    goodsList: [
      {
        id: "#",
        type:"fruit",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        id: "#",
        type:"fruit",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      },
      {
        id: "#",
        type:"fruit",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
      },
      {
        id: "#",
        type:"fruit",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        id: "#",
        type:"fruit",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      },
      {
        id: "#",
        type:"fruit",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
      },
      {
        id: "#",
        type:"fruit",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
      }
    ],
  },

  changeSearchValue: function(e) {
    this.setData({
      "searchValue": e.detail.value,
    });
  },

  search: function(e) {
    wx.navigateTo({
      url: '../goods_list_page/goods_list_page?type=search&page=1&value=' + this.data.searchValue
    });
  },

  getList: function(type, from, limit) {
      let that = this;
      wx.request({
        url: '#/get_list',
        method:"POST",
        header: {
          "Content-Type": "application/json"
        },
        data: {
          "type": type,
          "from": from, 
          "limit": limit
        },
        success: function(response) {
          that.setData({
            goodsList: response.data.list,
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
      "type": options.type,
      "page": parseInt(options.page) - 1,
      "value": options.value,
    });

    let from = parseInt(that.data.page) * 10;    
    if (that.data.type == "search") {
        wx.request({
          url: '#/search',
          method:"POST",
          header: {
            "Content-Type": "application/json"
          },
          data: {
            "value": that.data.value,
            "from": from, 
            "limit": 10
          },
          success: function(response) {
            that.setData({
              goodsList: response.data.list,
            });
          }
        });
    } else {
        wx.request({
          url: '#/get_list',
          method:"POST",
          header: {
            "Content-Type": "application/json"
          },
          data: {
            "type": that.data.type,
            "from": that.data.page * 10, 
            "limit": 10
          },
          success: function(response) {
            that.setData({
              goodsList: response.data.list,
            });
          }
        });
    }
  },

  scrollToLower: function(e) {
      let that = this;
      that.setData({
        "page": parseInt(that.data.page) + 1
      });
      that.getList(that.data.type, parseInt(that.data.page) * 10, 10);
  },

  scrollToUpper: function(e) {
      let that = this;
      if (parseInt(that.data.page) <= 0) return;
      that.setData({
        "page": parseInt(that.data.page) - 1
      });
      that.getList(that.data.type, parseInt(that.data.page) * 10, 10);
  },
  
})