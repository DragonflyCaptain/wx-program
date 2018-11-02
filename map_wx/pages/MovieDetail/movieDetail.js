Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    content:'',
    num:'',
    languages:[],
    video: '',
    photo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('222222', options.languages)
      let data = JSON.parse(options.data)
      let languages = JSON.parse(options.languages)
      let photo = JSON.parse(options.photo)
    console.log('_____', languages)
      this.setData({
        detail:data,
        content: options.content,
        num: options.num,
        languages: languages,
        video: options.video,
        photo: photo
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
    
  },
  playVideo(e){
    console.log('eeeeeeee',e)
    wx.navigateTo({
      url: '../Video/video?video=' + e.currentTarget.dataset.video,
    })
  },
  goToVideo(e){
    console.log('e',e)
    if(e.target.dataset.index==0){
      wx.navigateTo({
        url: '../Video/video?video=' + this.data.video,
      })
    }
  }
})