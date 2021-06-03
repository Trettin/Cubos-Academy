import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Error from "../components/Error";

import { useForm } from "react-hook-form";

import onSubmit from "../utils/onSubmit";

export default function NewComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="input-title">
        Título
        <Input
          id="input-title"
          type="text"
          {...register("title", { required: true, minLength: 5 })}
        />
        <Error errors={errors} errorName="title" />
      </label>

      <label htmlFor="input-comentary">
        Comentário
        <TextArea
          id="input-comentary"
          {...register("commentary", { required: true, maxLength: 30 })}
        />
        <Error errors={errors} errorName="commentary" />
      </label>

      <label htmlFor="userId">
        Usuário
        <Input
          id="userId"
          type="number"
          {...register("userId", { required: true })}
        />
        <Error errors={errors} errorName="userId" />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}
