const {
  sendMessageService,
  getMessagesFromConvServeice,
} = require("../service/message.service.js");

exports.SendMessageController = async (req, res) => {
  try {
    const { id: reciverId } = req.params;
    const senderId = req.user._id;
    const data = { ...req.body, senderId, reciverId };
    const ServiceName = await sendMessageService(data);

    res.status(200).json({
      status: "success",
      message: "Order updated successfully",
      data: ServiceName,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};

exports.GetMessagesController = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const message = await getMessagesFromConvServeice(senderId, userToChatId);

    res.status(200).json({
      status: "success",
      message: "Message get successfull",
      data: message,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
};
