module.exports = app => {
  const mongoose = app.mongoose;
  const departmentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'The department name is required.'],
      trim: true,
    },
    value: {
      type: String,
      required: [true, 'The department value is required.'],
      match: /^[A-Z][\w\-\.]+$/,
      trim: true,
    },
  }, { _id: false });
  const labelSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'The label name is required.'],
      trim: true,
    },
    value: {
      type: String,
      required: [true, 'The label value is required.'],
      trim: true,
    },
  }, { _id: false });
  const abilitySchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Ability name is required.'],
      trim: true,
    },
    value: {
      type: Number,
      required: [true, 'Ability value is required.'],
      min: [1, 'The ability value should not be less than 1.'],
      max: [5, 'The ability value should not be greater than 5.'],
    },
  }, { _id: false });
  const maintainerSchema = new mongoose.Schema({
    uid: {
      type: Number,
      required: [true, 'User identifier is required.'],
      min: [1000, 'The uid less than 1000 is reserved.'],
    },
    name: {
      type: String,
      required: [true, 'User name is required.'],
      trim: true,
    },
  }, { _id: false });
  const userSchema = new mongoose.Schema({
    uid: {
      type: Number,
      required: [true, 'User identifier is required.'],
      min: [1000, 'The uid less than 1000 is reserved.'],
      index: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'User name is required.'],
      index: true,
      trim: true,
    },
    account: {
      type: String,
      required: [true, 'User account is required.'],
      index: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'User password is required.'],
      trim: true,
    },
    mobile: {
      type: String,
      required: [true, 'The user mobile should be specified'],
      match: /^1(\d){10}$/,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'The user email should be specified'],
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      trim: true,
    },
    role: {
      type: String,
      enum: ['Admin', 'Manager', 'User', 'Guest'],
      required: [true, 'The user role should be specified.'],
      default: 'User',
    },
    department: {
      type: departmentSchema,
      required: [true, 'The user department should be specified.'],
    },
    labels: {
      type: [labelSchema],
      required: [true, 'At least one label is required.'],
    },
    status: {
      type: String,
      enum: ['Active', 'Absent', 'Unavailable', 'Resigned', 'Deleted'],
      required: [true, 'The user status should be specified.'],
      default: 'Active',
      index: true,
    },
    preferences: {
      type: Object,
      required: [true, 'The user preferences should be specified.'],
      default: {
        users: [],
        projects: [],
        tasks: [],
        reports: [],
      },
    },
    abilities: {
      type: [abilitySchema],
      default: [],
    },
    metrics: {
      type: Object,
      required: [true, 'The user metrics should be specified.'],
      default: {
        projects: {
          current: [],
          owned: 0,
          participated: 0,
        },
        tasks: {
          current: [],
          total: 0,
          pending: 0,
          active: 0,
          completed: 0,
          suspended: 0,
          terminated: 0,
          delayed: 0,
          qualification: 0,
        },
        manhours: {
          estimate: 0,
          actual: 0,
        },
        assessment: {
          performance: 0,
          efficiency: 0,
          bonus: 0,
          score: 0,
        },
      },
    },
    maintainer: {
      type: maintainerSchema,
      required: [true, 'The user maintainer should be specified.'],
    },
    created: {
      type: Date,
      required: [true, 'The created time should be specified.'],
    },
    updated: {
      type: Date,
      required: [true, 'The updated time should be specified.'],
      index: true,
    },
  }, {
    collection: 'users',
    minimize: false,
    versionKey: 'version',
  });

  return mongoose.model('User', userSchema);
};
