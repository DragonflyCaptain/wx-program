Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:[],
    arr:{},
    pageLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.showLoading({
        title: '加载中',
      })
      let _this = this;
      wx.request({
        url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=&udid=',
        header:{
          "Content-Type": "application/text"
        },
        success(res){
          console.log('豆瓣',res)
          // _this.movie = res.data.subjects;
          _this.setData({
            movie: res.data.subjects
          })
        },
        fail(){
          wx.navigateBack({
            delta:100
          })
        },
        complete(){
          wx.hideLoading()
        }
      })
  },
  /**
   * 点击单个的详情页
   */
  detailPage(e){
    console.log('index',)
    if(this.data.pageLoading==false){
      this.setData({
        arr: e.currentTarget.dataset.item,
        pageLoading: true
      })
      let _this = this;
      wx.request({
        url: 'https://api.douban.com/v2/movie/subject/' + e.currentTarget.dataset.item.id+'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=',
        header: {
          "Content-Type": "application/text"
        },
        success(res){
          console.log('*****',res)
          let content = res.data.summary
          let num = res.data.wish_count
          let languages = res.data.languages
          let video = res.data.blooper_urls[0]
          let photo = res.data.photos
          wx.navigateTo({
            url: '../MovieDetail/movieDetail?data=' + JSON.stringify(_this.data.arr) + '&content=' + content + '&num=' + num + '&languages=' + JSON.stringify(languages) + '&video=' + video + '&photo=' + JSON.stringify(photo),
          })
          _this.setData({
            pageLoading:false
          })
        },
        fail() {
          wx.navigateBack({
            delta: 100
          })
        }
      })
      
    }else{

      return
    }
  }
})