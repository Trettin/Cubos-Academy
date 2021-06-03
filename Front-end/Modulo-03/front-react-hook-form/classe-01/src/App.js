import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";

import Input from "./components/Input";
import TextArea from "./components/TextArea";
import Error from "./components/Error";

import onSubmit from "./utils/onSubmit";

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
        <Error errors={errors} errorName="title" />

        <label htmlFor="input-comentary">Comentário</label>
        <TextArea
          id="input-comentary"
          {...register("commentary", { required: true, maxLength: 30 })}
        />
        <Error errors={errors} errorName="commentary" />

        <label htmlFor="userId">Usuário</label>
        <Input
          id="userId"
          type="number"
          {...register("userId", { required: true })}
        />
        <Error errors={errors} errorName="userId" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
