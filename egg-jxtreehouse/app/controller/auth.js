const {Controller} = require('egg');
const path = require('path');
const fs = require('fs');
const wormhole = require('stream-wormhole');

class AuthController extends Controller {
  async login() {
    const {ctx, app, config} = this;
    const {cookies, request, model, helper} = ctx;
    const body = request.body;
    const user = await model.User.findOne({
      'account': body.account,
      'password': helper.hash(body.password, app.keys),
    });
    if(user) {
      const uid = user.uid;
      cookies.set('uid', uid, config.cookies);
      ctx.redirect('/user/home');
    }else {
      ctx.body = await ctx.renderView('403.pug', {
        message: 'error.Login',
      });
    }
  }
}

module.exports = AuthController;