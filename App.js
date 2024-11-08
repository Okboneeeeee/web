// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput';

function App() {
  const [userName, setUserName] = useState(''); // 儲存用戶姓名
  const [posts, setPosts] = useState([]);       // 儲存所有的 posts
  const [inputValue, setInputValue] = useState(''); // 儲存當前的 post 輸入值

  // 處理姓名輸入的函數
  const handleUserNameChange = (name) => {
    setUserName(name);
  };

  // 處理 post 輸入框的改變
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 處理 post 的提交
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newPost = { name: userName, content: inputValue };// 新增 post 到 posts 清單，包含用戶姓名和內容
      setPosts([...posts, newPost]); // 新增 post 到 posts 清單
      setInputValue(''); // 清空輸入框
    }
  };

  return (
    <div className="App">
      <h1>Post Application</h1>
      
      {/* 渲染使用者輸入組件 */}
      <UserInput userName={userName} onUserNameChange={handleUserNameChange} />

      {/* Post 輸入表單 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="輸入你的 post"
        />
        <button type="submit">提交</button>
      </form>

      {/* 顯示所有的 posts */}
      <div>
        <h3>你的 Posts:</h3>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
             <strong>{post.name}</strong>: {post.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

