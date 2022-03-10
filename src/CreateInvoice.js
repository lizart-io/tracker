import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteTodo, getTodo, updateTodo } from "./api";
import Invoice from "./components/Invoice";

export const CreateInvoice = () => {
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

  return todo ? (
    <div className="mb-5">
      <div className="mt-3">
        <div className="d-flex justify-content-center h3 ml-3">
          Creating Invoice for {todo.firstName}&nbsp;{todo.lastName}
        </div>
        <div className="container">
          <Invoice todo={todo} />
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
