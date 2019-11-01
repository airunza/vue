/**
 * Env
 * ENV.VALUE {string} 环境变量值
 * ENV.BASE_URL {string} api 前缀
 * ENV.BASE_DIR {string} 生产环境代码路径前缀: https://app.playplus.cn ${BASE_DIR} / ...
 * ENV.OSS {object} oss 
 */
const ENVF =  function() {
  const route = window.location.href;
  /// 开发环境使用 proxyHost 代理api
  const proxyHost = 'http://localhost:3000'
  const ENV = {}
  switch (true) {
    case route.includes('/playboom/'):
      // ENV.BASE_DIR='/playboom/playh5/share/shareOther/'
      // ENV.BASE_DIR1='/playboom/playh5/share/shareLimited/'
      ENV.VALUE = 'playboom'
      ENV.BASE_DIR = '/playboom/h5'
      ENV.BASE_URL = 'https://app.playplus.cn/playboom/api'
      ENV.OSS = {
        AccessKey: 'LTAIXNURS89XnalE',
        AccessSecret: 's7AJmf8BTJ5qZHdxklSZEfKPZ8Ssxt',
        endpoint: 'https://playboom.oss-cn-beijing.aliyuncs.com'
      }
      break;
    case route.includes('/playboomuat/'):
      // ENV.BASE_DIR='/playboomuat/playh5/share/shareOther/'
      // ENV.BASE_DIR1='/playboomuat/playh5/share/shareLimited/'
      ENV.VALUE = 'playboomuat'
      ENV.BASE_DIR = '/playboomuat/h5'
      ENV.BASE_URL = 'https://app.playplus.cn/playboomuat/api'
      ENV.OSS = {
        AccessKey: 'LTAIf2L798dSKfDW',
        AccessSecret: 'X57qKeyDj2vs44m37G6TFHKc5UcLjr',
        endpoint: 'https://playboom-uat.oss-cn-beijing.aliyuncs.com'
      }
      break;
    default:
      throw '[ENV.js] 请在路由上加前缀 "/playboom/ or /playboomuat/" 用于控制环境变量'
  }
  
  if (process.env.NODE_ENV !== 'production') {
    const DEV_BASE_URL = ENV.BASE_URL.replace(/http?s{0,1}:\/\/app.playplus.cn/, proxyHost)
    ENV.BASE_URL = DEV_BASE_URL
  }

  console.log('ENV', ENV)
  return ENV
}

export default ENVF()