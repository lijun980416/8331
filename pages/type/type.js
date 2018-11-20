// pages/type/type.js
Page({
  //*展示详细信息
  showDetail:function(e){
    var url=e.currentTarget.id;
    console.log(e.currentTarget);
    wx.navigateTo({
      url:'/pages/detail/detail?url=' +url
  })
  },
  /*点击新闻类型*/
  select:function(e){
    var that=this;
    var id=e.target.id;
    this.setData({
      currentType:id
    });

    //*按新闻的类型，取新闻数据
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      data:{
        type:id,
        key:'8e5b807b9b75c1d0810d2cbcb4222456'},
        method:'GET',
        header:{
          'content-type':'application/json'
        },
        success:function(res){
          console.log(res);
          that.setData({
            newsList:res.data.result.data
          })
        },

    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    currentType:'top',
    newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      data: {
        type: 'id',
        key: '8e5b807b9b75c1d0810d2cbcb4222456'
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          newsList: res.data.result.data
        })
      }
    })
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