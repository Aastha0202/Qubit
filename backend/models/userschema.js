//userschema is table for storing the information about users of our website
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userschema = new mongoose.Schema(
  {
    College_name: {
      type: String,
      required: true,
    },
    College_id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
  },

  {
    timestamps: true,
  }
);
const Logins = mongoose.model("MYLOGIN", userschema);

module.exports = Logins;