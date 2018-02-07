const {Controller} = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const {request, query, queries, model } = ctx;
  }
}

module.exports = UserController;