const Conversation = require("../models/conversations.model");
const Message = require("../models/message.model");

exports.sendMessageService = async (data) => {
  // check the conversation  exists or not, if it does then add a new message to that conversation otherwise create a new one

  let conver = await Conversation.findOne({
    participents: { $all: [data.senderId, data.reciverId] },
  });
  if (!conver) {
    conver = await Conversation.create({
      participents: [data.senderId, data.reciverId],
    });
  }
  // now create a message collection
  const newMessage = new Message({
    senderId: data.senderId,
    recieverId: data.reciverId,
    message: data.message,
  });

  // if

  if (newMessage) {
    conver.messages.push(newMessage._id);
  }

  await Promise.all([conver.save(), newMessage.save()]);
  return newMessage;
};

// get all messages from the conversation between two users

exports.getMessagesFromConvServeice = async (senderId, userToChatId) => {
  const getConversatin = await Conversation.findOne({
    participents: { $all: [senderId, userToChatId] },
  }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

  if (!getConversatin) return [];

  const messages = getConversatin.messages;
  return messages;
};
