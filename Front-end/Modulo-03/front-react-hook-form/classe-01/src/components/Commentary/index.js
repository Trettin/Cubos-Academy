import "./style.css";
import useContextStates from "../../hooks/useContextStates";

export default function Commentary({ content: { userId, title, body } }) {
  const { setFindCommentResponse } = useContextStates();

  return (
    <div className="find-comment">
      <h3>Title: {title}</h3>
      <span>by user id {userId}</span>
      <p>{body}</p>
      <button onClick={() => setFindCommentResponse({})}>
        Find another comment...
      </button>
    </div>
  );
}
