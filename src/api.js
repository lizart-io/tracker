let url;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  url = "http://localhost:3001";
} else {
  url = "https://my-leads-api.herokuapp.com";
}

const api = (endpoint) => url + endpoint;

export const getTodos = () =>
  fetch(api('/leads')).then((res) => res.json());

export const createTodo = (todo) =>
  fetch(api('/leads'), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const sendInvoice = (data) =>
  fetch(api("/invoice/send"), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const updateTodo = (todo, id) =>
  fetch(api(`/leads/${id}`), {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
export const deleteTodo = (id) =>
  fetch(api(`/leads/${id}`), {
    method: "DELETE",
  });

export const getTodo = (id) => fetch(api(`/leads/${id}`)).then((res) => res.json());
