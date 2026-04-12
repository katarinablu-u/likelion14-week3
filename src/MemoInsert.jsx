import { useState } from "react";
import styled from "styled-components";

export default function MemoInsert({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <InputBox>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="메모 입력"
      />
      <Button onClick={handleAdd}>추가</Button>
    </InputBox>
  );
}

const InputBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 25px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 60px;
  border: none;
  border-radius: 12px;
  background-color: #90bc79;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }
`;