const User = require("../models/user.model");

exports.getUserService = async (id) => {
  const result = await User.find({ _id: { $ne: id } }).select("-password");
  return result;
};
