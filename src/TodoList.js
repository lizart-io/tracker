import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "./api";

export const TodoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos();
      setItems(todos);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Clients List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.firstName}</td>
                <td>
                  <Link to={`/invoice/${todo._id}`} className="btn btn-primary">
                     Invoice
                  </Link>
                  &nbsp;
                  <a
                    href={`tel:${todo.phone}`}
                    className="btn btn-outline-success"
                  >
                    <i className="fas fa-phone"></i> Call
                  </a>&nbsp;
                  <Link to={`/edit/${todo._id}`} className="btn btn-secondary">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
