// pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'https://www.xhuachina.com/wyglApp/',
    plan_place_id:'',
    token:'',
    scanId:'',
    ins_plan_id:'',
    ins_place_name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      plan_place_id: options.plan_place_id || '',
      scanId:options.scanId || '',
      token: options.token || '',
      ins_plan_id: options.ins_plan_id || '',
      ins_place_name: options.ins_place_name || ''
    })
    if (this.data.plan_place_id && this.data.token){
      this.setData({
        url: 'https://www.xhuachina.com/wyglApp/?ins_place_name=' + this.data.ins_place_name+'&ins_plan_id=' + this.data.ins_plan_id +' &plan_place_id=' + this.data.plan_place_id+'&scanId=' + this.data.scanId+'&token='+this.data.token
      })
    }
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