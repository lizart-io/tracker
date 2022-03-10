export const getTodos = () =>
  fetch("http://localhost:3001/leads").then((res) => res.json());

export const createTodo = (todo) =>
  fetch("http://localhost:3001/leads", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const sendInvoice = (data) =>
  fetch("http://localhost:3001/invoice/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const updateTodo = (todo, id) =>
  fetch(`http://localhost:3001/leads/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
export const deleteTodo = (id) =>
  fetch(`http://localhost:3001/leads/${id}`, {
    method: "DELETE",
  });

export const getTodo = (id) =>
  fetch(`http://localhost:3001/leads/${id}`).then((res) => res.json());
