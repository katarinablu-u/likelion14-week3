import { useState } from "react";
import MemoInsert from "./MemoInsert";
import MemoList from "./MemoList";

export default function App() {
  const [memos, setMemos] = useState([]);

  const addMemo = (text) => {
    setMemos([{ text }, ...memos]); // id 제거
  };

  const deleteMemo = (index) => {
    setMemos(memos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>MemoList</Title>
      <MemoInsert onAdd={addMemo} />
      <MemoList memos={memos} onDelete={deleteMemo} />
    </Container>
  );
}

import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: 100px auto;
  padding: 40px 20px;
  background-color: #f4f4e6;
  border-radius: 20px;
  text-align: center;
`;

const Title = styled.h1``;