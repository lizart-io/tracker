import React from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ todo, onSubmit, onDelete }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      comments: todo ? todo.comments : "",
      firstName: todo ? todo?.firstName : "",
      lastName: todo ? todo?.lastName : "",
      phone: todo ? todo?.phone : "",
      email: todo ? todo?.email : "",
      city: todo ? todo?.city : "",
      state: todo ? todo?.state : "",
      zipCode: todo ? todo?.zipCode : "",
      street: todo ? todo?.street : "",
    },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      {[
        "firstName",
        "lastName",
        "comments",
        "phone",
        "email",
        "street",
        "city",
        "state",
        "zipCode",
      ].map((field, index) => (
        <div className="form-group" key={index}>
          <label htmlFor={field}>{field}:</label>
          <input
            className="form-control"
            ref={register}
            type={field}
            name={field}
            id={field}
          />
        </div>
      ))}
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        {todo?._id && (
          <button
            type="submit"
            className="btn btn-danger mx-2"
            onClick={() => onDelete(todo._id)}
          >
            Delete Client
          </button>
        )}
      </div>
    </form>
  );
};
