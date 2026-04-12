import MemoItem from "./MemoItem";

export default function MemoList({ memos, onDelete }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          memo={memo}
          index={index}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}