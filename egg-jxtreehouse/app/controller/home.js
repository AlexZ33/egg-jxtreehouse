'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
    async index() {
        const { ctx, app, service } = this;
        const { model, helper } = ctx;
        const keys = app.keys;


        //Initialize the collections for testing
        // if(systems === 0) {
        //   const
        // }

        const data = { data: 'hi,jx' };
        ctx.body = await ctx.renderView('index.pug', data)
    }
}

module.exports = HomeController;