import styled from "styled-components";

export default function MemoItem({ memo, index, onDelete }) {
  return (
    <Item>
      <span>{memo.text}</span>
      <DeleteBtn onClick={() => onDelete(index)}>삭제</DeleteBtn>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 8px;
  background: white;
  border-radius: 5px;
`;

const DeleteBtn = styled.button`
  background-color: #e46868;
  color: white;
  border-radius: 10px;
  width: 50px;
  height: 30px;
  border: none;
  cursor: pointer;
`;