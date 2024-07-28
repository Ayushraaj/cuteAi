import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import ChatWindow from './components/ChatWindow';
import { useState } from 'react';
function App() {
  const [queries, setQueries] = useState([
    { text: 'What is Big Data?', id: 1, chat_id: 1 },
    { text: 'What is Meta AI Llama 3.1?', id: 2, chat_id: 2 },
  ]);
  const [chatWindows, setChatWindows] = useState([{ id: 1 }, { id: 2 }]);
  const [currentChatId, setCurrentChatId] = useState(1);

  const addNewQuery = () => {
    const newId = queries.length + 1;
    const newQuery = { text: 'New Query', id: newId, chat_id: newId };
    setQueries([...queries, newQuery]);
    setChatWindows([...chatWindows, { id: newQuery.id }]);
    setCurrentChatId(newQuery.id);
    console.log(`Current Chat ID: ${newQuery.id}`);
  };

  const handleChatClick = (chat_id) => {
    setCurrentChatId(chat_id);
    console.log(`Current Chat ID: ${chat_id}`);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="Brand">Cute Ai</span>
          </div>
          <button className="midbutton" onClick={addNewQuery}>
            <img src={addBtn} alt="New Chat" className="addBtn" />New Chat
          </button>
          <div className="upperSideBottom scrollable">
            {queries.map((query) => (
              <button 
                className={`query ${query.chat_id === currentChatId ? 'active' : ''}`} 
                key={query.chat_id}
                onClick={() => handleChatClick(query.chat_id)}
              >
                <img src={msgIcon} alt="Query" />{query.text}
              </button>
            ))}
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listitemImg" />Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listitemImg" />Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade to Pro" className="listitemImg" />Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="chatContainer">
        {chatWindows.map((chat) => (
          chat.id === currentChatId && <ChatWindow key={chat.id} chatId={chat.id} isActive={true} />
        ))}
      </div>
    </div>
  );
}

export default App;