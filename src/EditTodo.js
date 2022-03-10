import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteTodo, getTodo, updateTodo } from "./api";

export const EditTodo = () => {
  const match = useRouteMatch();
  const [todo, setTodo] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await getTodo(match.params.id);
      setTodo(todo);
    };
    fetchTodo();
  }, [match.params.id]);

  const onSubmit = async (data) => {
    await updateTodo(data, match.params.id);
    history.push("/");
  };
  const onDelete = async (_id) => {
    await deleteTodo(_id);
    history.push("/");
  };

  return todo ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Client</h3>
        <TodoForm todo={todo} onSubmit={onSubmit} onDelete={onDelete} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};