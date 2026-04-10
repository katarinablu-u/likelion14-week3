import MemoItem from "./MemoItem";

export default function MemoList({ memos, onDelete }) {
  return (
    <div>
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} onDelete={onDelete} />
      ))}
    </div>
  );
}