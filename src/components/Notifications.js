import React, { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  const removeNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>通知</h2>
      <input type="text" placeholder="通知メッセージを入力" id="notificationMessage" />
      <button onClick={() => addNotification(document.getElementById('notificationMessage').value)}>
        追加
      </button>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification}
            <button onClick={() => removeNotification(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
