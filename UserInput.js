// src/UserInput.js
import React, { useState, useEffect } from 'react';

function UserInput({ userName, onUserNameChange }) {
  //const [name, setName] = useState(''); // 儲存用戶輸入的姓名
  const [currentDate, setCurrentDate] = useState('');

  // 當組件加載時，設置當前日期
  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString(); // 轉為易讀的日期格式
    setCurrentDate(formattedDate);
  }, []);

  // 當用戶輸入時更新 name 的狀態
  const handleInputChange = (e) => {
    onUserNameChange(e.target.value);
  };

  return (
    <div>
      <h2>使用者輸入區</h2>
      <input
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="請輸入你的姓名"
      />
      <p>姓名：{userName}</p>
      <p>日期：{currentDate}</p>
    </div>
  );
}

export default UserInput;
