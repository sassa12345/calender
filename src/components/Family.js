import React, { useState } from 'react';

function Family() {
  const [familyMembers, setFamilyMembers] = useState([]);

  const addFamilyMember = (name) => {
    setFamilyMembers([...familyMembers, name]);
  };

  const removeFamilyMember = (index) => {
    setFamilyMembers(familyMembers.filter((_, i) => i !== index));
  };

  const editFamilyMember = (index) => {
    const name = window.prompt('新しい名前を入力してください', familyMembers[index]);
    if (name) {
      setFamilyMembers(familyMembers.map((member, i) => (i === index ? name : member)));
    }
  };

  return (
    <div>
      <h2>家族登録</h2>
      <input type="text" placeholder="名前を入力" id="familyMemberName" />
      <button onClick={() => addFamilyMember(document.getElementById('familyMemberName').value)}>
        追加
      </button>
      <ul>
        {familyMembers.map((member, index) => (
          <li key={index}>
            {member}
            <button onClick={() => editFamilyMember(index)}>編集</button>
            <button onClick={() => removeFamilyMember(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Family;
