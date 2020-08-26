const modeUrlObj = {
    // 开发环境
    'development': {
      baseURL: 'http://test.ywiii.com:8081/ywshop',
      // baseURL: 'http://test.ywiii.com:8082/ywshop',
      // baseURL: 'http://192.168.1.112',
      // baseURL: 'http://192.168.1.2',
      urlParams:'?debug=1'
      // urlParams:'?qrId=82'
      // urlParams:'?'
    },
    //本地包
    'dev': {
      baseURL: 'http://test.ywiii.com:8081/ywshop',
      urlParams:'?'
    },
    // 测试环境包
    'test': {
      baseURL: 'http://test.ywiii.com:8082/ywshop',
      urlParams:'?'
    },
    // 预生产包
    'prodtest': {
      baseURL: 'http://test.ywiii.com/ywshop',
      urlParams:'?'
    },
    // 生产环境包
    'production': {
      baseURL: 'http://ghy.ywiii.com/ywshop',
      urlParams:'?'
    }
  }
  
  export default modeUrlObj[process.env.NODE_ENV]