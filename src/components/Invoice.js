import React, { useState } from "react";
import { sendInvoice } from "../api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { RenderInvoice, invoice } from "../emails/invoice";
export default function Invoice({ todo }) {
  const history = useHistory();
  const [cost, setCost] = useState(0);
  const [items, setItems] = useState([]);
  const [method, setMethod] = useState("");
  const [status, setStatus] = useState("");
  const [_item, _setItem] = useState({
    name: "",
    quantity: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    _setItem({ ..._item, [e.target.name]: e.target.value });
  };

  const pushItemToState = () => {
    if (!_item.name && !_item.quantity) {
      alert("You need to add the item name & quantity");
      return;
    }
    setItems((items) => [
      ...items,
      { name: _item.name, quantity: _item.quantity },
    ]);
    _setItem({ name: "", quantity: "" });

    console.log(items);
  };

  const onSendInvoice = async (e) => {
    e.preventDefault();

    const response = await sendInvoice({
      client: todo,
      email: invoice(todo, items, cost, method, status),
    });

    console.log(response);
    if (response.ok) {
      toast.success("Invoice was sent successfully!");
      history.push("/");
    } else if (!response.status === 200) {
      toast.error(
        "Invoice was not emailed. Please try again later. If error continues, let Erick know."
      );
    }
  };
  return (
    <>
      <div className="container mb-3 bg bg-light pb-3">
        <hr />
        <label>Total Cost of Invoice</label>&nbsp;
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            onChange={(e) => {
              e.preventDefault();
              setCost(e.target.value);
            }}
          />
        </div>
        <hr />
        <select
          className="form-select"
          name="paymentMethod"
          aria-label="Default select example"
          onChange={(e) => setMethod(e.target.value)}
        >
          <option selected>Select Agreed Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="Check">Check</option>
        </select>
        <hr />
        <select
          className="form-select"
          name="invoiceStatus"
          aria-label="Default select example"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option selected>Select Invoice Status</option>
          <option value="Not Paid Yet">Not Paid Yet</option>
          <option value="Paid">Paid</option>
        </select>
        <hr className="pt-4" />
        <label>Items and Quantities: {items.length}</label>
        <br />
        {items.length >= 1 && (
          <ul>
            {items.map((item) => (
              <li key={item.name + item.quantity}>
                Item: {item.name} - Qty: {item.quantity}
              </li>
            ))}
          </ul>
        )}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Item"
            value={_item.name}
            aria-label="Username"
            onChange={handleChange}
          />
          <input
            type="text"
            name="quantity"
            className="form-control"
            value={_item.quantity}
            placeholder="quantity"
            onChange={handleChange}
            aria-label="Server"
          />
          <button className="btn btn-primary" onClick={pushItemToState}>
            Add
          </button>
        </div>
      </div>

      {window.screen.availWidth >= 800 && (
        <div>
          <code className="text-primary">Invoice - Email Preview</code>
          <div className="container border border-primary py-5">
            <RenderInvoice
              invoice={invoice(todo, items, cost, method, status)}
            />
          </div>
        </div>
      )}
      <div className="container">
        <button
          className="btn btn-primary btn-lg shadow-lg mt-5"
          onClick={onSendInvoice}
        >Send Invoice</button>
      </div>
    </>
  );
}

/**
 * 
 * 
 <div className="container">
        <div className="my-5">
          <code className="h3 mt-5">Invoice Preview </code>
        </div>
        <div className="card border border-secondary shadow-lg">
          <div className="card-header">
            <strong>Invoice</strong>:&nbsp;{date}
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-sm-6">
                <h6 className="mb-3">From:</h6>
                <div>
                  <strong>Erick's Home Improvement LLC</strong>
                </div>
                <div>Maryland, Washington DC</div>
                <div>Email: honda202179@icloud.com</div>
                <div>Phone: +1 240-645-6460</div>
              </div>

              <div className="col-sm-6">
                <h6 className="mb-3">To:</h6>
                <div>
                  <strong>
                    {todo.firstName}&nbsp;{todo.lastName}{" "}
                  </strong>
                </div>
                <div>
                  {todo.street}, {todo.city}, {todo.zipCode}
                  .&nbsp;{todo.state}.
                </div>
                <div>Email: {todo.email}</div>
                <div>Phone: +{todo.phone}</div>
              </div>
            </div>

            <div className="table-responsive-sm">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Item</th>

                    <th className="center">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length >= 1 &&
                    items.map((item) => (
                      <tr key={item.name + item.quantity}>
                        <td className="left strong">{item.name}</td>
                        <td className="right">x&nbsp;{item.quantity}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-5"></div>

              <div className="col-lg-4 col-sm-5 ml-auto">
                <table className="table table-clear">
                  <tbody>
                    <tr>
                      <td className="left">
                        <strong>Total</strong>
                      </td>
                      <td className="right">
                        <strong>${cost}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
 */
