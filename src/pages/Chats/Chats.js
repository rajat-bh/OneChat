import React, { useState, useRef, useEffect } from 'react';
import './Chats.css';
import { messages } from '../../constants/tempMessages';
import { tempChats } from '../../constants/tempChats';

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const messageInputRef = useRef(null);

  const selectChat = (chat) => {
    setSelectedChat(chat);
  };

  const getChatMessages = () => {
    if (selectedChat) {
      const chat = messages.find((item) => item.chatId === selectedChat.id);
      return chat ? chat.messages : [];
    }
    return [];
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        id: new Date().getTime(),
        sender: 'You',
        content: messageInput,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      const chat = messages.find((item) => item.chatId === selectedChat.id);
      if (chat) {
        chat.messages.push(newMessage);
      }
      setMessageInput('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  }, [selectedChat]);

  return (
    <div className="one-chat">
      <div className="sidebar">
        <div className="logo">OneChat</div>
        <div className="chat-list">
          {tempChats.map((chat) => (
            <div
              key={chat.id}
              className={`chat ${selectedChat === chat ? 'active' : ''}`}
              onClick={() => selectChat(chat)}
            >
              <img className="profile-photo-small" src={chat.profilePhoto} alt={chat.name} />
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-window">
        {selectedChat ? (
          <>
            <div className="chat-header">
              <img className="profile-photo-large" src={selectedChat.profilePhoto} alt={selectedChat.name} />
              {selectedChat.name}
            </div>
            <div className="chat-messages">
              {getChatMessages().map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.sender === 'You' ? 'sender' : 'receiver'}`}
                >
                  <div className="bubble">{message.content}</div>
                  <div className="timestamp">{message.timestamp}</div>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={messageInputRef}
                className="message-input"
              />
              <button onClick={handleSendMessage} className="send-button">
                <i className="material-icons">send</i>
              </button>
            </div>
          </>
        ) : (
          <div className="no-chat-selected">No chat selected</div>
        )}
      </div>
    </div>
  );
};

export default Chats;


