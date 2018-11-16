/*
 * @Author: AlexZ33
 * @Date:   2018-11-17
 * @Last Modified by:   AlexZ33
 * @Last Modified time: 2018-11-17
 */
module.exports = app => {
  const mongoose = app.mongoose;
  
  /**
 * 电影模型
 */
  const movieSchema = new mongoose.Schema({
    title: String,
    docktor: String, // 导演
    scriptWriter: String,　//编剧　
    country: String,
    year: Number,

  })
  // 将 moviceSchema 这个模式发布为 Model
  // movie -> movies
  return mongoose.model('movie', movieSchema);
};
