// miniprogram/pages/my_info_page/my_info_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:12345678,
      nickname:"peihuangwu",
      gender:1,
      colleges:[
        "电气工程学院",
        "机械工程学院",
        "理学院",
        "能源与动力工程学院",
        "电子与信息工程学院",
        "法学院",
        "航天航空学院",
        "材料科学与工程学院",
        "软件学院",
        '人居环境与建筑工程学院',
        "生命科学与技术学院",
        "医学部",
        "经济与金融学院",
        "公共政策与管理学院",
        "管理学院",
        "人文社会科学学院",
        "金禾经济研究中心",
        "外国语学院",
        "前沿科学技术研究院",
        "数学与统计学院",
        "化学工程与技术学院",
        "体育中心",
        "马克思主义学院",
        "可持续发展学院",
        "国际教育学院",	
        "继续教育学院",	
        "网络教育学院",
      ],
      collegeIndex:0,
      year:[
        1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020
      ],
      yearIndex:0,
      month:["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
      monthIndex:0,
      signature:"热爱生活，热爱编程",
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
        url: '#/get_info',
        header: {
          "Content-Type": "application/json"
        },
        data: {
          "sessionId": that.data.sessionId,
        },
        success: function(response) {
          that.setData({
            id: response.data.id,
            nickname: response.data.nickname,
            gender: response.data.gender,
            collegeIndex: response.data.college,
            yearIndex: response.data.year,
            monthIndex: response.data.month,
            signature: response.data.signature,
          });
        }
      });
  },

  submit: function(e) {
    wx.request({
      url: '#/set_info',
      header: {
        "Content-Type": "application/json"
      },
      data: {
        "sessionId": that.data.sessionId,
        "id": e.detail.value["id"],
        "nickname": e.detail.value["nickname"],
        "gender": e.detail.value["gender"],
        "collegeIndex": e.detail.value["collegeIndex"],
        "yearIndex": e.detail.value["yearIndex"],
        "monthIndex": e.detail.value["monthIndex"],
        "signature": e.detail.value["signature"],
      },
      success: function(response) {
      
      }
    });
  }
})