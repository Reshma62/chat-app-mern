var jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// TODO: START FROM 1:14 MIN https://www.youtube.com/watch?v=HwCqsOis894&t=4877s
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // console.log(token, "colle");
    // return;
    // Make sure user has a token
    if (!token) {
      return res
        .status(401)
        .send({ message: "No token, authorization denied" });
    }
    // verify a token symmetric
    jwt.verify(token, process.env.SECRET_KEY, async function (err, decoded) {
      // console.log(decoded.foo); // bar
      if (err) {
        return res
          .status(401)
          .send({ message: "wrong token, authorization denied" });
      }
      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return res.status(401).send({ message: "User not found!" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(400).send({
      message: "server error",
      error: error.message,
    });
  }
};

module.exports = protectRoute;
