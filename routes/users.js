const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const plm = require("passport-local-mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/IntellPin");

mongoose.connect(process.env.MONGODB_CONNECT_URI)

const userSchema = mongoose.Schema({
  username: {
    type: String,
  },
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: Number,
  },
  password: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  boards: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.plugin(plm);

module.exports = mongoose.model("User", userSchema);
