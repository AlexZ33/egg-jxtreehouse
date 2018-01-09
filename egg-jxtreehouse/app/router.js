'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { home } = controller;


  //Homepage
  router.get('/', home.index);
};
