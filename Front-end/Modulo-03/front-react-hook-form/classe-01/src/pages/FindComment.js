import Input from "../components/Input";
import Error from "../components/Error";
import Commentary from "../components/Commentary/Commentary";

import { useForm } from "react-hook-form";

import useContextStates from "../hooks/useContextStates";

export default function FindComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onSubmitGet, findCommentResponse } = useContextStates();

  return (
    <form onSubmit={handleSubmit((data) => onSubmitGet(data))}>
      <label htmlFor="input-findComment">
        What is the id of the commentary you are looking for?
        <Input
          id="input-findComment"
          type="number"
          {...register("findId", { required: true })}
        />
        <Error errors={errors} errorName="commentId" />
      </label>
      <button type="submit">Send</button>
      {findCommentResponse.title && (
        <Commentary content={findCommentResponse} />
      )}
    </form>
  );
}
