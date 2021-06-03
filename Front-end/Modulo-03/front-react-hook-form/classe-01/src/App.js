import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";

const Input = React.forwardRef((props, ref) => (
  <input
    type={props.type}
    id={props.id}
    ref={ref}
    name={props.name}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
));

const InputTextArea = React.forwardRef((props, ref) => (
  <textarea
    id={props.id}
    ref={ref}
    name={props.name}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />
));

function onSubmit(data) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      body: data.commentary,
      userId: data.userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input-title">Título</label>
        <Input
          id="input-title"
          type="text"
          {...register("title", { required: true, minLength: 5 })}
        />
        {errors.title?.type === "required" && (
          <span style={{ color: "red" }}>O título é obrigatório</span>
        )}
        {errors.title?.type === "minLength" && (
          <span style={{ color: "red" }}>
            O título deve ter no mínimo cinco letras
          </span>
        )}

        <label htmlFor="input-comentary">Comentário</label>
        <InputTextArea
          id="input-comentary"
          {...register("commentary", { required: true, maxLength: 30 })}
        />
        {errors.commentary?.type === "required" && (
          <span style={{ color: "red" }}>Escreva seu comentário</span>
        )}
        {errors.commentary?.type === "maxLength" && (
          <span style={{ color: "red" }}>
            Seu comentário deve ter no máximo 30 caracteres.
          </span>
        )}

        <label htmlFor="userId">Usuário</label>
        <Input
          id="userId"
          type="number"
          {...register("userId", { required: true })}
        />
        {errors.userId?.type === "required" && (
          <span style={{ color: "red" }}>O Id do usuário é obrigatório</span>
        )}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
