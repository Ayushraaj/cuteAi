// ChatWindow.js
import React, { useState } from 'react';
import userIcon from '../assets/user.png';
import gptimagelogo from '../assets/ai.png';
import sendbtn from '../assets/send.svg';



const ChatWindow = ({ chatId, isActive }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  
    const sendMessage = () => {
      if (input.trim() === '') return;
      setMessages([...messages, { text: input, sender: 'user' }, { text: '...', sender: 'ai' }]);
      setInput('');
    };
  
    return (
      <div className={`mainBar ${isActive ? 'active' : ''}`}>
        <div className="chats">
          {messages.map((msg, index) => (
            <div className={`chat ${msg.sender}`} key={index}>
              <img className="chatimg" src={msg.sender === 'user' ? userIcon : gptimagelogo} alt="" />
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chatfooter">
          <div className="inp">
            <input 
              type="text" 
              placeholder="Send a message" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
            />
            <button className="send" onClick={sendMessage}>
              <img src={sendbtn} alt="send" />
            </button>
          </div>
          <p>© 2024 Cute Ai. All rights reserved.</p>
        </div>
      </div>
    );
  };
  
  export default ChatWindow;
  