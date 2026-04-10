export default function MemoItem({ memo, onDelete }) {
  return (
    <div className="memo-item">
      <span>{memo.text}</span>
      <button 
        className="delete-btn"
        onClick={() => onDelete(memo.id)}
      >
        삭제
      </button>
    </div>
  );
}