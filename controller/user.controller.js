const { getUserService } = require("../service/user.service");

exports.GetUserController = async (req, res) => {
  try {
    const id = req.user._id;
    const GetUser = await getUserService(id);

    res.status(200).json({
      status: "success",
      message: "Get  User Successfully!",
      data: GetUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
