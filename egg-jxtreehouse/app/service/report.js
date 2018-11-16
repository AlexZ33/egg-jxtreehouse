const { Service } = require('egg')

class ReportService extends Service {
  async save(doc) {
    const { ctx, service } = this;
    const { model } = ctx
    if (doc) {
      const name = doc.name
      
    }
  }
}