import { useState, useRef, useEffect } from 'react';
import './globals.css';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(true);
  const chatWindowRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate developer response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Hello! How can I help you?', sender: 'developer' },
        ]);
      }, 1000);
    }
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    let isResizing = false;

    const handleMouseDown = (e) => {
      isResizing = true;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
      if (isResizing) {
        chatWindow.style.width = `${e.clientX - chatWindow.offsetLeft}px`;
        chatWindow.style.height = `${e.clientY - chatWindow.offsetTop}px`;
      }
    };

    const handleMouseUp = () => {
      isResizing = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    chatWindow.querySelector('.resizer').addEventListener('mousedown', handleMouseDown);

    return () => {
      chatWindow.querySelector('.resizer').removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  if (!isChatOpen) return null;

  return (
    <div ref={chatWindowRef} className="chat-window">
      <button className="chat-close-button" onClick={handleCloseChat}>×</button>
      <div className="chat-header">
        <h2 className="chat-title">Chat with Developer</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender === 'user' ? 'chat-message-user' : 'chat-message-developer'}`}>
            <span className={`chat-bubble ${message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-developer'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="chat-send-button"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
      <div className="resizer"></div>
    </div>
  );
}
