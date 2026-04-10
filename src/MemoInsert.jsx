import { useState } from "react";

export default function MemoInsert({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="메모를 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}