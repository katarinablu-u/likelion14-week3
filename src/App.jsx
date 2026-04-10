import { useState } from "react";
import MemoInsert from "./MemoInsert";
import MemoList from "./MemoList";

export default function App() {
  const [memos, setMemos] = useState([]);

  const addMemo = (text) => {
    const newMemo = {
      id: Date.now(),
      text,
    };
    setMemos([newMemo, ...memos]); // 위에 추가
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <div className="container">
      <h1>MemoList</h1>
      <MemoInsert onAdd={addMemo} />
      <MemoList memos={memos} onDelete={deleteMemo} />
    </div>
  );
}