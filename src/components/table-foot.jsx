import React, { Component } from "react";
import "../App.css";

class TableFoot extends Component {
  state = {};
  render() {
    return (
      <tfoot>
        <tr>
          <th className="hide-xs" scope="row"></th>
          <td className="hide-xs"></td>
          <td className="hide-xs"></td>
          <td>
            total: $<span className="total">205.12</span>
          </td>
          <td className="hide-xs"></td>
        </tr>
        <tr>
          <th>
            <button className="btn btn-warning" type="button">
              <span className="badge">
                <i className="mr-2 pg-arrow_left_line_alt"></i>
              </span>
              Continue Shopping
            </button>
          </th>
          <td className="hide-xs" scope="row"></td>
          <td className="hide-xs"></td>
          <td className="hide-xs"></td>
          <td>
            <button
              className="btn btn-success"
              type="button"
              data-toggle="modal"
              data-target="#checkOutBox"
            >
              CheckOut
              <span className="badge">
                <i className="ml-2 pg-arrow_lright_line_alt"></i>
              </span>
            </button>
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFoot;
