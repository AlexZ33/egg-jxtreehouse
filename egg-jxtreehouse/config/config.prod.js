const path = require('path')

module.exports = appInfo => {
  
  // Project info
  const basename = path.basename(path.join(appInfo.baseDir, '..'));
  const matches = basename.match(/^(trial|standard|professional)\-(\d+)$/);
  const id = matches ? matches[2] : '';

  // MongoDB
  config.mongoose = {
    url: `mongodb://localhost:27017/jxtreehouse`,
  };

  // Error
  config.onerror = {
    html(err, ctx) {
      ctx.status = 500;
      ctx.redirect('/500')
    },
    json(err, ctx) {
      ctx.status = 500;
      ctx.body = { message: 'Error'}
    }
  };

  // Not found 
  config.notfound = {
    pageUrl: '/404'
  };

  return config
}; 