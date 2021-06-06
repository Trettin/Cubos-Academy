import Input from "../components/Input";
import Error from "../components/Error";
import TextArea from "../components/TextArea";

import { useForm } from "react-hook-form";

import useContextStates from "../hooks/useContextStates";

export default function UpdateComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onSubmitUpdate } = useContextStates();

  return (
    <div>
      <form onSubmit={handleSubmit((data) => onSubmitUpdate(data))}>
        <label htmlFor="input-updateComment">
          What is the id of the commentary you want to edit?
          <Input
            id="input-updateComment"
            type="number"
            {...register("commentId", { required: true })}
          />
          <Error errors={errors} errorName="commentId" />
        </label>
        <label htmlFor="input-title">
          New Title
          <Input
            id="input-title"
            type="text"
            {...register("title", { required: true, minLength: 5 })}
          />
          <Error errors={errors} errorName="mandatory" />
          <Error errors={errors} errorName="title" />
        </label>

        <label htmlFor="input-comentary">
          New commentary
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
      </form>
    </div>
  );
}
