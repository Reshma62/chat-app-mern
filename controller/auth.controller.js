const { generateToken, removeToken } = require("../helpers/generateJwt.js");
const { loginService, signUpService } = require("../service/auth.service.js");

exports.LoginController = async (req, res) => {
  try {
    const login = await loginService(req.body);
    if (login.error) {
      return res.status(400).json({
        status: "error",
        message: login.error,
      });
    }
    generateToken(login._id, res);
    res.status(200).json({
      status: "success",
      message: "Login successfull",
      data: login,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
exports.SignUpController = async (req, res) => {
  try {
    const signUp = await signUpService(req.body);
    if (signUp.error) {
      return res.json({
        status: "error",
        message: signUp.error,
      });
    }
    generateToken(signUp._id, res);
    res.status(200).json({
      status: "success",
      message: "Signup successfull",
      data: signUp,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

exports.LogOutController = async (req, res) => {
  try {
    removeToken(res);
    res.status(200).send({ data: "Logged out!" });
    console.log("logout");
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
