// pages/polling/scan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // result: ''
    token:'',
    plan_place_id:'',
    ins_plan_id:'',
    ins_place_name:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.options)
    this.setData({
      token: options.token,
      plan_place_id: options.plan_place_id,
      ins_plan_id: options.ins_plan_id,
      ins_place_name: options.ins_place_name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getScancode();
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

  getScancode: function () {
    var _this = this;
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        // var result = res.result;
        // _this.setData({
        //   result: result,
        // })
        wx.showToast({
          title: '扫描成功！', 
          icon: 'success', 
          duration: 1500   
        })
        wx.redirectTo({
          url: '/pages/webview/webview?ins_place_name=' + this.data.ins_place_name +'&ins_plan_id=' + this.data.ins_plan_id +'&plan_place_id=' + this.data.plan_place_id + '&token=' + this.data.token +'&scanId=' + res.result,
        })
        // wx.navigateBack({//返回
        //   id: res.result,
        //   token: this.data.token
        // })
      },
      fail:(res) => {
        wx.showToast({
          title: '扫描失败！',
          icon: 'error',
          duration: 1500 
        })
        wx.redirectTo({
          url: '/pages/webview/webview?ins_place_name=' + this.data.ins_place_name +'&ins_plan_id=' + this.data.ins_plan_id +'&plan_place_id=' + this.data.plan_place_id + '&token=' + this.data.token + '&scanId=',
        })
      }

    })

  }
})