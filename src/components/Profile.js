import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'ユーザー名',
    email: 'user@example.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <h2>プロフィール</h2>
      <form>
        <div>
          <label>名前: </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>メール: </label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
