import { motion } from "framer-motion";

const ChatbotDemo = () => {
  return (
    <motion.div
      className="relative aspect-square max-w-md mx-auto flex flex-col bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold">Chat with Mistral AI</h3>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FF8C00]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FF0000]"></div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto h-48 bg-black/20 p-3 rounded-md">
        <div className="bg-gray-800 p-2 rounded-lg text-white w-max">Hello! How can I help you?</div>
        <div className="bg-blue-600 p-2 rounded-lg text-white w-max self-end">What can you do?</div>
        <div className="bg-gray-800 p-2 rounded-lg text-white w-max">
          I can assist with AI-powered solutions, answer questions, and more!
        </div>
      </div>

      {/* Chat Input */}
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-black/30 text-white px-3 py-2 rounded-l-md border border-gray-700 focus:outline-none"
        />
        <button className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] px-4 py-2 rounded-r-md text-black font-semibold">
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatbotDemo;
