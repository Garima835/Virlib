import { createChatBotMessage } from 'react-chatbot-kit';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const config = {
  botName: "Virlib Assistant",
  initialMessages: [createChatBotMessage("Hi! I'm your virtual librarian. Ask me anything!")],
  state: {},
  customComponents: {},
  widgets: [],
  actionProvider: ActionProvider,
  messageParser: MessageParser,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5b3e0a",
    },
    chatButton: {
      backgroundColor: "#5b3e0a",
    },
  },
};

export default config;
