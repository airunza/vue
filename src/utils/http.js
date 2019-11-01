// import errorReport from './errorReport'
// import Interface from './interface'

// 需要全局注册的 jsApi
const jsApiList = [
  'updateAppMessageShareData', 'updateTimelineShareData',
  'onMenuShareTimeline', 'onMenuShareAppMessage',
  'hideMenuItems'
]

/**
 * 分享给好友 & 朋友圈
 * @param {object} [params]
 * @param {string} params.title 标题
 * @param {string} params.desc 简介
 * @param {string} params.link 链接
 * @param {string} params.logo 图标
 * @return {promise}
 */
export function Share(params = {}) {
  const { title, desc, link, logo } = params
  return initWechatConfig()
    .then(_ => {
      jsApiList.forEach(api => {
        api.includes('Share') && typeof window.wx[api] === 'function' && window.wx[api]({ 
          title: title || '每日一句',
          desc: desc || '惊爆1折优惠！活动即将结束',
          link: link || location.href,
          imgUrl: logo || 'https://app.playplus.cn/playboom/wechat/logo.jpg',
          success(res) {
            console.log('1',res)
          },
          complete(res) {
            console.log('1',res)
          },
          fail(err) {
            console.log('1',err)
          }
        })
      })
    })
    .catch(err => {
      // errorReport(err)
      console.error(err)
    })
}

/**
 * 隐藏右上角菜单项
 * @param {array} menuList 
 * @return {promise}
 */
export function HideMenuItems(menuList = []) {
  return menuList.length && initWechatConfig().then(_ => {
    window.wx.hideMenuItems({
      menuList
    })
  })
}

/**
 * 初始化微信 jsApi
 * @param {array} [_jsApiList] 按需注册
 * @return {promise}
 */
export default function initWechatConfig(_jsApiList = []) {
  if (typeof window.wx === 'undefined') { 
    return Promise.reject('JSSDK缺失')
  }
  const readyHandler = config => {
    window.wxconfig = config
    return new Promise((resolve, reject) => {
      window.wx.ready(_ => {
        window._wxReady = true
        resolve(config)
      })
      window.wx.error(reject)
    })
  }
  const { wxconfig, _wxReady } = window
  if (wxconfig) {
    if (_wxReady) {
      return Promise.resolve(wxconfig)
    }
    return readyHandler(wxconfig)
  }
  return Interface.getData('get', Interface.dec.get, {
    url: encodeURI(location.href) 
  }).then(res => res.data)
    .then(res => {
      window.wx.config({
        debug: location.search.includes('console'),
        jsApiList: _jsApiList.length ? _jsApiList : jsApiList,
        ...res.data,
      })
      return readyHandler(res.data)
    })
    .catch(e => {
      console.error(e)
      // errorReport(e)
      return Promise.reject(e)
    }) 
    
}