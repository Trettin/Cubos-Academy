export default function Error({ errors, errorName }) {
  let errorMsg = "";

  if (errors.title?.type === "required" && errorName === "mandatory") {
    errorMsg = "The title is mandatory.";
  }
  if (errors.title?.type === "minLength" && errorName === "title") {
    errorMsg = "The title must have at least five characters.";
  }
  if (errors.commentary?.type === "required" && errorName === "commentary") {
    errorMsg =
      "Please, write your commentary. We can't post a blank commentary.";
  }
  if (errors.commentary?.type === "maxLength" && errorName === "commentary") {
    errorMsg = "Your comment must have a maxium of thirty characters.";
  }
  if (errors.userId?.type === "required" && errorName === "userId") {
    errorMsg = "The user id is mandatory.";
  }
  if (errors.findId?.type === "required" && errorName === "commentId") {
    errorMsg = "The commentary id is mandatory.";
  }
  if (errors.delete?.type === "required" && errorName === "delete") {
    errorMsg = "The commentary id is mandatory.";
  }

  return errorMsg ? (
    <span style={{ color: "red", fontSize: "0.8rem" }}>{errorMsg}</span>
  ) : (
    ""
  );
}
