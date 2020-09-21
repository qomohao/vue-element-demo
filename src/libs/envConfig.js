const envConfig = {
    'development': {
      baseURL: 'developmentdevelopmentdevelopment',
    },
     'test': {
      baseURL: 'testtesttest',
    },
     'test_pre': {
      baseURL: 'test_pretest_pretest_pre',
    },
     'production': {
      baseURL: 'productionproductionproduction',
    }
  }
  
  export default envConfig[process.env.NODE_ENV]