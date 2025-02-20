// miniprogram/pages/publish_goods_page/publish_goods_page.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:[],
    flag: true,
    classificationList:[
      "书籍资料",
      "零食特产",
      "生活用品",
      "电子设备",
      "水果蔬菜"
    ],
    selectedClass: 0,
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
      };
      const platform = wx.getSystemInfoSync().platform;
      const isIOS = platform === 'ios';
      this.setData({ isIOS});
      const that = this;
      this.updatePosition(0);
      let keyboardHeight = 0;
      wx.onKeyboardHeightChange(res => {
        if (res.height === keyboardHeight) return;
        const duration = res.height > 0 ? res.duration * 1000 : 0;
        keyboardHeight = res.height;
        setTimeout(() => {
          wx.pageScrollTo({
            scrollTop: 0,
            success() {
              that.updatePosition(keyboardHeight)
              that.editorCtx.scrollIntoView()
            }
          })
        }, duration);

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
  
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },

  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const { windowHeight, platform } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({ editorHeight, keyboardHeight })
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = wx.getSystemInfoSync()
    const { statusBarHeight, platform } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },

  submit: function(e){
    let that = this;
    

  },

  chooseImage: function(e) {
      var that = this;
      wx.chooseImage({
        count: 6,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          that.setData({
            tempFilePaths: res.tempFilePaths,
          });
        },
      });
  }

})