export default function Error({ errors, errorName }) {
  let errorMsg = "";

  if (errors.title?.type === "required" && errorName === "title") {
    errorMsg = "O título é obrigatório.";
  }
  if (errors.title?.type === "minLength" && errorName === "title") {
    errorMsg = "O título deve ter no mínimo cinco letras.";
  }
  if (errors.commentary?.type === "required" && errorName === "commentary") {
    errorMsg = "Escreva seu comentário";
  }
  if (errors.commentary?.type === "maxLength" && errorName === "commentary") {
    errorMsg = "Seu comentário deve ter no máximo 30 caracteres.";
  }
  if (errors.userId?.type === "required" && errorName === "userId") {
    errorMsg = "O Id do usuário é obrigatório.";
  }

  return errorMsg ? <span style={{ color: "red" }}>{errorMsg}</span> : "";
}
