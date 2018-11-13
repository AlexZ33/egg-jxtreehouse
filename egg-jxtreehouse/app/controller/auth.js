const { Controller } = require('egg');
const path = require('path');
const fs = require('fs');
const wormhole = require('stream-wormhole');

class AuthController extends Controller {
  async login() {
    const { ctx, app, config } = this;
    const { cookies, request, model, helper } = ctx;
    const body = request.body;

    const createRule = {
      name: {
        type: 'string',
      },
      password: {
        type: 'string'
      }
    };
    // 参数校验
    ctx.validate(createRule);

    const user = await model.User.findOne({
      'account': body.account,
      'password': helper.hash(body.password, app.keys),
    });

    if (user) {
      const uid = user.uid;
      cookies.set('uid', uid, config.cookies);
      ctx.session.user = user;
      ctx.redirect('/user/home');
      ctx.body = {
        code: '0',
        message: 'success',
        data: user
      };
    } else {
      ctx.body = await ctx.renderView('403.pug', {
        message: 'error.Login',
      });
      ctx.body.code = '10000';
      ctx.body.message = '用户不存在'
    }
  };
  logout() {
    const { ctx } = this;
    const { cookies } = ctx;
    cookies.set('uid', null)
    ctx.redirect('/')
  };
  async register() {
    const { ctx, app, config, service } = this;
    const { cookies, request, model, helper } = ctx;
    const body = request.body

    const createRule = {
      name: {
        type: 'string',
      },
      password: {
        type: 'string'
      }
    };
    // 参数校验
    ctx.validate(createRule);
    const user = await model.User.create(request.body)
    ctx.body = {
      code: 0,
      message: 'success',
      data: {
        user: {
          name: user.name
        }
      }
    }
  }
}

module.exports = AuthController;