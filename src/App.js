import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { TodoList } from "./TodoList";
import { CreateTodo } from "./CreateTodo";
import { EditTodo } from "./EditTodo";
import { CreateInvoice } from "./CreateInvoice";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link h1 bg-dark text-light">
              Clients
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link h1 bg-primary text-light">
              + Client
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/invoice/:id" component={CreateInvoice} />
      </Switch>
    </div>
  );
}

export default App;
