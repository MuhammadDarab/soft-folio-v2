import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000/");
// const socket = io("https://mcs-test-orgs.koyeb.app/");

let chatTypingInterval = 0;

const ChatBox = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isDarabTyping, setIsDarabTyping] = useState(false);

  const chatBoxRef = useRef();

  socket.off().on("typing", (data) => {
    if (data.darabTypeStatus) {
      if (data.darabTypeStatus == 'typing') {
        setIsDarabTyping(true)
      } else if (data.darabTypeStatus == 'not-typing') {
        setIsDarabTyping(false)
      }
    }
  });

  socket.off().on("message", (msg) => {
    console.log('here')
    setChatMessages([...chatMessages, msg]);
  });

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      socket.emit("message", {
        message: inputText,
        sentBy: "Visitor",
      });
      setInputText("");
    }
  };
  const handleSendViaEnter = (ev) => {
    if (ev?.key == "Enter") {
      ev.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    clearInterval(chatTypingInterval);
    socket.emit('typing', { visitorTypeStatus: 'typing' });
    chatTypingInterval = setTimeout(() => {
      socket.emit('typing', { visitorTypeStatus: 'not-typing' });
    }, 1000);
  }, [inputText]);

  return (
    <>
    <div className="w-full border rounded p-4">
      <div className="mb-4 border-b">
        <h2 className="text-xl">🟢Send me a realtime message..</h2>
        <h4 className="text-sm text-gray-500">
          Your message will land on my phone!, will get back to you as soon as i see it! In Shaa Allah!
        </h4>
      </div>
      <div className="max-h-72 h-72 overflow-y-auto mb-4 text-sm" ref={chatBoxRef}>
        {chatMessages.map(({ message, sentBy }, index) => {
          if (sentBy == "Visitor")
            return (
              <motion.div
                initial={{ scale: 0.8, x: -100 }}
                animate={{ scale: 1, x: 0 }}
                key={index}
                className="mb-2 bg-gray-700 rounded-md w-fit text-white py-1 px-2"
              >
                You: {message}
                <div className="text-xs text-gray-400">
                  {new Date().toLocaleTimeString()}
                </div>
              </motion.div>
            );
          return (
            <motion.div
              initial={{ scale: 0.8, x: -100 }}
              animate={{ scale: 1, x: 0 }}
              key={index}
              className="mb-2 bg-white rounded-md w-fit text-gray-700 py-1 px-2 ml-auto"
            >
              Muhammad Darab: {message}
              <div className="text-xs text-gray-400">
                {new Date().toLocaleTimeString()}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Send message to Muhammad Darab..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 p-2 mr-2 rounded border text-sm"
          onKeyDown={handleSendViaEnter}
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 rounded bg-gray-700 text-white text-sm"
        >
          Send
        </button>
      </div>
      {
        isDarabTyping && <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="text-sm">
          <strong>Muhammad Darab</strong> is typing...
        </motion.div>
      }
    </div>
    <br />
    </>
  );
};

export default ChatBox;
