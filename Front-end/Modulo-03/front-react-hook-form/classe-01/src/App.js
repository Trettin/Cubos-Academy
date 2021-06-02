import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";

const InputTitle = React.forwardRef((props, ref) => (
  <input
    type="text"
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
      userId: 1,
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
        <InputTitle
          id="input-title"
          {...register("title", { required: true })}
        />
        {errors.title?.type === "required" && (
          <span style={{ color: "red" }}>O título é obrigatório</span>
        )}

        <label htmlFor="">Comentário</label>
        <textarea
          type="textarea"
          {...register("commentary", { required: true })}
        />
        {errors.commentary?.type === "required" && (
          <span style={{ color: "red" }}>Escreva seu comentário</span>
        )}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
