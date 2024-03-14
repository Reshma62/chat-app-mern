const jwt = require("jsonwebtoken");
const generateToken = (userId, res) => {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.SECRET_KEY,
    { expiresIn: "15d" }
  );
  res.cookie("jwt", token, {
    httpOnly: true,
    maxage: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
    secure: process.env.NODE_ENV !== "development",
    samesite: "strict",
  });
};

const removeToken = (res) => {
  res.clearCookie("jwt", { maxage: 0 });
};
module.exports = { generateToken, removeToken };
