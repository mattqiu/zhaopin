var app = getApp();
let event = require('../../utils/event.js');
let {
    ripple
} = require('../../utils/ripple.js');
Page({
    data: {
        userInfoFromWX: {},
        userInfo: null,
        ripple: {
            s1: '',
            s2: '',
            s3: '',
            s4: ''
        }
    },
    onLoad: function() {
        app.getUserInfoFromWX((data) => {
            this.setData({
                userInfoFromWX: data
            })
        })
        app.getUserInfo((data) => {
            this.setData({
                userInfo: data
            })
        })
        event.on('userInfoChanged', this, function(data) {
            this.setData({
                userInfo: data.userInfo
            })
        }.bind(this))
    },
    onUnolad: function() {
        event.remove('userInfoChanged', this)
    },
    navigateTo(e) {
        ripple.call(this, e);
        wx.navigateTo({
            url: e.currentTarget.dataset.url
        })
    }
})