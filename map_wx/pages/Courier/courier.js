Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 9984816743
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
    
  },
  find(e){
    console.log('222',this.data.num)
    wx.request({
      url: 'https://www.kuaidi100.com/query?type=yuantong&postid=' + this.data.num + '&id=1&valicode=&temp=',
      success(res){
        console.log(res)
      }
    })
  },
  input(e){
    this.setData({
      num: e.detail.value
    })
  }
})