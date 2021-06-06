import Input from "../components/Input";
import Error from "../components/Error";

import { useForm } from "react-hook-form";

import useContextStates from "../hooks/useContextStates";

export default function DeleteComment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onSubmitDelete, deleteResponse } = useContextStates();

  return (
    <form onSubmit={handleSubmit((data) => onSubmitDelete(data))}>
      <label htmlFor="input-delete">
        What is the id of the commentary you want to delete?
        <Input
          id="input-delete"
          type="number"
          {...register("delete", { required: true })}
        />
        <Error errors={errors} errorName="delete" />
      </label>
      <button type="submit">Send</button>
      {deleteResponse && (
        <span style={{ color: "green" }}>Comment deleted!</span>
      )}
    </form>
  );
}
