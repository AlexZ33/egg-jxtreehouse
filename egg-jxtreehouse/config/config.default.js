module.exports = appInfo => {
    const config = {};


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
    return config;
};