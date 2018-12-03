/*
 * @Author: AlexZ33
 * @Date:   2018-11-17
 * @Last Modified by:   AlexZ33
 * @Last Modified time: 2018-11-17
 */
module.exports = app => {
  const mongoose = app.mongoose;
  const ObjectId = mongoose.Schema.Types.ObjectId;
 
 /**
 * 定义一个 Schema 模式
 * Schema 对象定义文档结构，可以定义字段、类型、唯一性、索引、验证等。
 * new Schema() 中传入一个 JSON 对象，定义属性和属性类型
 */
  /**
 * 电影模型
 */
  const movieSchema = new mongoose.Schema({
    title: String,
    year: Number, // 年份
    docktor: String, // 导演
    scriptWriter: String,　//编剧
    actor: String, // 主演
    type: String, // 类型　
    country: String, // 制作国家/地区
    language: String, //语言
    flash: String,   //　发行时间
    summary: String, //片长
    IMDb: String, //IMDb链接
    douban: String, // 豆瓣链接
    category: {
      type: ObjectId,
      ref: 'Category'
    },
    meta: {
      createAt: {
        type: Date,
        default: Date.now()
      },
      updateAt: {
        type: Date,
        default: Date.now()
      }
    }
  })

  // 将 moviceSchema 这个模式发布为 Model
  // movie -> movies
  return mongoose.model('movie', movieSchema);
};
