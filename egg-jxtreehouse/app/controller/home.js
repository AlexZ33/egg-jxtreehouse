'use strict';
const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, app, service } = this;
    const { request, model, helper } = ctx;
    const keys = app.keys;
    console.log(request)
    const user = request.user
    //Initialize the collections for testing
    // if(systems === 0) {
    //   const
    // }

    const data = { data: 'hi,jx' };
    ctx.body = await ctx.renderView('index.pug', data)
  }
}

module.exports = HomeController;