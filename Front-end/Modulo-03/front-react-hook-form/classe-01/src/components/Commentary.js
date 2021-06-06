export default function Commentary({ content: { userId, title, body } }) {
  return (
    <div>
      <h3>Title: {title}</h3>
      <h4>by user id {userId}</h4>
      <p>{body}</p>
    </div>
  );
}
