// import ENV from '../ENV';
let axiosConfig = {
    baseURL: 'https://app.playplus.cn/playboom/api/',
    timeout: 6000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    maxContentLength: 5000
}
if (location.hostname == 'localhost') {
    axiosConfig.baseURL = 'https://app.playplus.cn/playboom/api/';
} else {
    axiosConfig.baseURL = '/api';
}
export default axiosConfig;