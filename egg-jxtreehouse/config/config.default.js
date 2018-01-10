module.exports = appInfo => {
    const config = {};

    //should change to your own
    config.keys = appInfo.name + '@jxtreehouse';

    //URL token param
    config.token = {
        keys: appInfo.name + '@jxtreehouse',
        maxDays: 7,
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