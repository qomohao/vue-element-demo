const modeUrlObj = {
    'development': {
      baseURL: '12development333333',
    },
     'test': {
      baseURL: '32423testtesttest4234',
    },
     'test_pre': {
      baseURL: '234test_pretest_pretest_pre234234',
    },
     'production': {
      baseURL: '23productionproductionproduction4234',
    }
  }
  
  export default modeUrlObj[process.env.NODE_ENV]