const User = require("../models/user.model");
const bcrypt = require("bcrypt");
exports.signUpService = async (data) => {
  const { email, name, password, gender } = data;
  if (!email) {
    return { error: "email is requried" };
  }
  if (!name) {
    return { error: "name is requried" };
  }
  if (!password) {
    return { error: "password is requried" };
  }
  if (!gender) {
    return { error: "gender is requried" };
  }
  //   return data;

  const existsUser = await User.find({ email: data.email });
  if (existsUser.length > 0) {
    return { error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await new User({ ...data, password: hashedPassword }).save();
  return result;
};
exports.loginService = async (data) => {
  const user = await User.findOne({ email: data.email });

  // Compare provided password with the hashed password stored in the database
  const passwordMatch = await bcrypt.compare(data.password, user.password);
  if (!user || !passwordMatch) {
    return { error: "Credential not match" };
  }

  return user;
};
