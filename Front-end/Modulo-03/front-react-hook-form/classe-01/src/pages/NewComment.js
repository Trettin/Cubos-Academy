import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Error from "../components/Error";

import { useForm } from "react-hook-form";

import useContextStates from "../hooks/useContextStates";

export default function NewComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onSubmitPost, newCommentResponse } = useContextStates();

  return (
    <form onSubmit={handleSubmit((data) => onSubmitPost(data))}>
      <label htmlFor="input-title">
        Title
        <Input
          id="input-title"
          type="text"
          {...register("title", { required: true, minLength: 5 })}
        />
        <Error errors={errors} errorName="mandatory" />
        <Error errors={errors} errorName="title" />
      </label>

      <label htmlFor="input-comentary">
        Commentary
        <TextArea
          id="input-comentary"
          {...register("commentary", { required: true, maxLength: 30 })}
        />
        <Error errors={errors} errorName="commentary" />
      </label>

      <label htmlFor="userId">
        User id
        <Input
          id="userId"
          type="number"
          {...register("userId", { required: true })}
        />
        <Error errors={errors} errorName="userId" />
      </label>

      <button type="submit">Send</button>

      {newCommentResponse && (
        <span style={{ color: "green" }}>Comment received!</span>
      )}
    </form>
  );
}
