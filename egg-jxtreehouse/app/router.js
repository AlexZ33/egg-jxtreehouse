'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { home, auth} = controller;


  //Homepage
  router.get('/', home.index);

  //Auth
  // router.post('/auth/login', auth.login);
  // router.get('/auth/logout', middlewares.islogin, auth.logout);
};
