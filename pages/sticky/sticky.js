// pages/sticky/sticky.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.onCreateIntersectionObserver()
	},

	getElement: function (elm, component) {
		const _this = this
		return new Promise((resolve, reject) => {
			let ss = setInterval(function () {
				let Qy = component ? _this.createSelectorQuery() : wx.createSelectorQuery()
				Qy.select(elm).boundingClientRect(function (res) {
					if (res) {
						clearInterval(ss)
						resolve(res)
					}
				}).exec()
			}, 50)
		})
	},

	onCreateIntersectionObserver: function (component, elm) {
		const _this = this
		this.getElement(elm || '.main', component).then(res => {
			_this.IntersectionObserver = component ? _this.createIntersectionObserver() : wx.createIntersectionObserver()
			_this.IntersectionObserver.relativeTo('.reference').observe(elm || '.main', (res) => {
				_this.setData({
					show: res.intersectionRatio > 0
				})
			})
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