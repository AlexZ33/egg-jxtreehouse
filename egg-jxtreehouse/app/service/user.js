const { Service } = require('egg');
const crypto = require('crypto');
const md5 = require('blueimp-md5')

class UserService extends Service {
  async initialize() {
    const { ctx, service } = this
    const { model } =  ctx
    const user = new model.User({
      'uid': 1000,
      'name': 'Admin',
      'password': service.user.hash('admin'),
      'mobile': '12345678910',
      'email': 'admin@example.com',
      'role': 'Admin',
      'department': {
        'name': '部门',
        'value': 'Department',
      },
      'labels': [
        {
          'name': '普通',
          'value': 'General',
        }
      ],
      'maintainer': {
        'uid': 1000,
        'name': 'Admin'
      },
      'created': new Date(),
      'updated': new Date()
    })

    const doc = await user.save()
    await service.record.save(doc)
    await service.report.save(doc)
  }
  async create (user) {
    return (await this.ctx.model.User({
      email: user.email,
      password: md5(user.password, this.config.md5Key),
      name: user.name
    }).save()).toObject()
  }
}