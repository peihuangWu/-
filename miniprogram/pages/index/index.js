Page({
  data: {
    sessionId: "",
    searchValue:"",
    swiperList: [
      {
        id:"#",
        src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3532249801,4016244769&fm=26&gp=0.jpg"
      },
      {
        id:"#",
        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586251306091&di=a64de107f3424c2adda6f2ca7f33df2d&imgtype=0&src=http%3A%2F%2Fimg3.99114.com%2Fgroup1%2FM00%2F0F%2FE7%2FwKgGS1d0tjWALWcZAAIP2y7NA7k633.jpg"
      },
      {
        id:"#",
        src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586251306091&di=974754b6d10ee9759223a847e03a642b&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F61%2F50%2F16pic_6150415_b.jpg"
      }
    ],
    bookList: [
      {
        id: "#",
        type:"book",
        src: "https://img.alicdn.com/imgextra/i2/1614846122/TB1N.2Dn4GYBuNjy0FnXXX5lpXa_!!0-item_pic.jpg_430x430q90.jpg",
        title: "数据结构 严蔚敏 数据结构 c语言版 严蔚敏 数据结构与算法 数据结构和算法习题 c语言数据结构 清华大学出版社",
        price: 28.00
      },
      {
        id: "#",
        type:"book",
        src: "https://img.alicdn.com/imgextra/i2/2451699564/O1CN012KWMRNidK6DctvU_!!0-item_pic.jpg_430x430q90.jpg",
        title: "鸟哥的Linux私房菜 基础学习篇第四版 linux操作系统教程从入门到精通书籍 鸟叔第4版计算机数据库编程shell技巧内核命令教程书籍",
        price: 86.80
      },
      {
        id: "#",
        type:"book",
        src: "https://img.alicdn.com/imgextra/i1/1049653664/TB19sxqveuSBuNjy1XcXXcYjFXa_!!0-item_pic.jpg_430x430q90.jpg",
        title: "正版c++ primer plus 第6版中文版C++语言从入门到精通 零基础自学C语言程序设计编程游戏书 计算机程序开发数据结构基础教程书籍",
        price: 89.30
      },
    ],
    snacksList: [
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
      },
      {
        id: "#",
        type:"snacks",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
      },
    ],
    liveList: [
      {
        id: "#",
        type:"live",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        id: "#",
        type:"live",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      },
      {
        id: "#",
        type:"live",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
      },
    ],
    electronicList: [
      {
        id: "#",
        type:"elec",
        src: "https://img.alicdn.com/imgextra/i3/725677994/TB2gg_LsStYBeNjSspkXXbU8VXa_!!725677994.jpg_430x430q90.jpg",
        title: "黃金香金絲豬肉松250g*2廈門鼓浪嶼特產拌粥壽司兒童零食豬肉類",
        price: 109.00
      },
      {
        id: "#",
        type:"elec",
        src: "https://img.alicdn.com/imgextra/i2/1719214398/O1CN01X4udDW1iMKTzkUgB4_!!1719214398.jpg_430x430q90.jpg",
        title: "沈大成糕点青芝士团网红零食小吃老字号美食上海特产",
        price: 49.00
      },
      {
        id: "#",
        type:"elec",
        src: "https://img.alicdn.com/imgextra/i3/884012584/TB2nYh1s9tYBeNjSspaXXaOOFXa_!!884012584.jpg_430x430q90.jpg",
        title: "盼盼肉松条1300g肉松饼糕点休闲零食品整箱营养早餐面包肉松棒",
        price: 31.90
      },
    ],
    fruitList: [
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
    ]
  },

  changeSearchValue: function(e) {
    this.setData({
      "searchValue": e.detail.value,
    });
  },

  search: function(e) {
    let that = this;
    wx.navigateTo({
      url: '../goods_list_page/goods_list_page?type=search&page=1&value=' + that.data.searchValue
    });
  },

  onLoad: function(options) {
      var that = this;

      function getSessionId() {
        wx.login({
          success: function(res) {
              wx.request({
                url: '#/get_session',
                method:"POST",
                data: {
                  code: res.code
                },
                success: function(response) {
                  return response.data.sessionId;
                }
              });
          }
        });
      }

      let sessionId = wx.getStorage({
        key: "sessionId",
      });

      if (!sessionId || sessionId.length == 0) {
          sessionId = getSessionId();
          wx.setStorage({
            data: sessionId,
            key: 'sessionId',
          });
          sessionId = wx.getStorage({
            key: "sessionId",
          });
      };

      wx.request({
        url: '#/login',
        method:"POST",
        header: {
          "Content-Type": "application/json"
        },
        data: {
          "sessionId": sessionId
        },
        success: function(response) {
            let status = response.data.status;
            let app = getApp();
            if (status == 1) {
                app.globalData.status = 1;
                that.setData({
                  "sessionId": sessionId
                })
                app.globalData.sessionId = sessionId;
            } else if (status == 2) {
                app.globalData.sessionId = sessionId;
                app.globalData.id = response.data.id;
                app.globalData.nickname = response.data.nickname;
                app.globalData.gender = response.data.gender;
                app.globalData.college = response.data.college;
                app.globalData.year = response.data.year;
                app.globalData.month = response.data.month;
                app.globalData.signature = response.data.signature;
                that.setData({
                  "sessionId": sessionId
                })
                app.globalData.sessionId = sessionId;
            } else if (status == 0) {
                sessionId = getSessionId();
                wx.setStorage({
                  data: sessionId,
                  key: 'sessionId',
                });
                this.onLoad();
            }
        }
      });

      wx.request({
        url: '#/get_list',
        method:"POST",
        header: {
          "Content-Type": "application/json"
        },
        data: {
          "type": "swiper", //轮播图
          "from": 0,
          "limit": 3
        },
        success: function(response) {
          that.setData({
            swiperList: response.data.list,
          });
        }
      });

      wx.request({
        url: '#/get_list',
        method:"POST",
        header: {
          "Content-Type": "application/json"
        },
        data: {
          "type": "all", //五大种类的前三个商品
          "from": 0, 
          "limit": 3
        },
        success: function(response) {
          that.setData({
            bookList: response.data.list.slice(0, 3),
            snacksList: response.data.list.slice(3, 6),
            liveList: response.data.list.slice(6, 9),
            electronicList: response.data.list.slice(9, 12),
            fruitList: response.data.list.slice(12, 15),
          });
        }
      });
  },
});