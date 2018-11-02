Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    btn: [
      '电影'
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad(){
    let _this = this;
    wx.request({
      url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=5',
      success(res){
        console.log(res)
        let head = 'https://www.bing.com';
        let arr = res.data.images;
        let arr2 = []
        arr.map(item=>{
          arr2.push(head + item.url)
        })
        _this.setData({
          imgUrls:arr2
        })
      }
    })
  },
  click_(e){
    console.log('eeee',e)
    if(e.target.dataset.test==2){
      wx.navigateTo({
        url: '../test/test',
      })
    }else{
      console.log('e.target.dataset.tset', e.target.dataset.test)
    }
  },
  goToMovie(){
    wx.navigateTo({
      url: '../Movie/movie',
    })
  },
  goToNews() {
    wx.navigateTo({
      url: '../Courier/courier',
    })
  }
  
})