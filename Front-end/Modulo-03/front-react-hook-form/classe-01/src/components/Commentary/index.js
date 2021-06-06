import "./style.css";

export default function Commentary({
  content: { userId, title, body },
  resetFindComment,
}) {
  return (
    <div className="find-comment">
      <h3>Title: {title}</h3>
      <span>by user id {userId}</span>
      <p>{body}</p>
      <button onClick={() => resetFindComment()}>
        Find another comment...
      </button>
    </div>
  );
}
