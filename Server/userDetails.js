const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
  {
    AType: String,
    email: { type: String, unique: true },
    password: String,
    cpassword: String,
    country: String,
    years: String,
    gender: String,
  },
  {
    collection: 'UserInfo',
  }
);

mongoose.model('UserInfo', UserDetailsSchema);
