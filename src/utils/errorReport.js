import Interface from './interface';
// import storage from './storage'

const report = err => {
  if (typeof err === 'object' && err.response && err.response.data) {
    // http error
    try {
      err = { 
        message: err.response.data,
        source: location.href,
        api: err.request && err.request.responseURL || "",
        status: err.status || 'unknow'
      }
    } catch (e) {
      err = err.response.data
    }
  }
  err && Interface.getData('post',Interface.dec.post, {
    content: typeof err === 'object' ? JSON.stringify(err) : err,
    agent: navigator.userAgent,
    // openid: (storage.get('user') || {}).openid
  })
}

window.onerror = (message, source, lineno, colno, error) => { 
  const err = JSON.stringify({
    message, source, lineno, colno, error: error.toString()
  })
  report(err)
}

export default report