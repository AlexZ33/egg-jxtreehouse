const path = require('path')

module.exports = appInfo => {
  const config = {};

  config.bodyParser = {
    jsonLimit: '500kb'
  };

  //Theme
  config.theme = {
    ui: {
      name: 'default',
    },
    brand: {
      name: '镜心的小树屋',
      favicon: '/public/images/favicon.png',
    },
    company: {
      name: '镜心书社',
      url: 'http://jxdxsw.com',
    }
  };
  //should change to your own
  config.keys = appInfo.name + '@jxtreehouse';

  //URL token param
  config.token = {
    keys: appInfo.name + '@jxtreehouse',
    maxDays: 7,
  };

  // Cookies
  config.cookies = {
    maxAge: 1000 * 3600 * 24 * 30,
    signed: true,
  };

  //CORS
  config.cors = {
    origin: '*',
    allowMethods: 'GET,POST',
  };

  //Security
  config.security = {
    domainWhiteList: [
      'jxdxsw.com'
    ],
  };


  // MongoDB
  config.mongoose = {
    url: 'mongodb://localhost:27017/jxtreehouse',
    options: {},
  };

  //Pug template 
  config.view = {
    defaultViewEngine: 'pug',
    mapping: {
      '.pug': 'pug',
    }
  };

  config.pug = {
    pretty: true,
  };


  //I18n
  config.i18n = {
    defaultLocale: 'zh-CN'
  };

  //加载中间件 使用访问: http(s)://{host}:{port}/graphql
  // config.middleware = ['graphql'];
  config.middleware = ['auth'];

  //graphql
  // config.graphql = {
  //     router: '/graphql',
  //     //是否加载到app上，默认开启
  //     app: true,
  //     // 是否加载到agent 上,默认关闭
  //     agent: false,
  //     // 是否加载开发工具 graphiql，默认开启.路由同rooter字段.使用浏览器打开该可见
  //     graphiql: true
  // };
  return config;
};