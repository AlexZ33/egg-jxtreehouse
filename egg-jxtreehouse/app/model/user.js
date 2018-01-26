module.exports = app => {
  const mongoose = app.mongoose;
  const userSchema = new mongoose.Schema({
    uid: {
      type: Number,
      required:[true, 'User identifier is required'],
      min: [1000, 'The uid less than 1000 is reserved.']
      index: true,
      unique: true,
    },
    name: {

    },

  }, {
    collection: 'users',
    minimize: false,
    versionKey: 'version',
  });

  return mongoose.model('User', userSchema)
}