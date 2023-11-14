const hostUrl = '';

export default {
  // 本地持久化存储key
  projectKey: 'XinJiangBS',
  // api请求地址
  // #ifdef H5
  // H5 环境，配合menifest.json中的devServe配置来解决调试时的跨域问题
  baseUrl: process.env.NODE_ENV === 'development' ? '/dev' : hostUrl,
  // #endif
  // #ifndef H5
  baseUrl: hostUrl,
  // #endif
  // 盐
  kSalt: 'XDSAKDSALMSD',
}