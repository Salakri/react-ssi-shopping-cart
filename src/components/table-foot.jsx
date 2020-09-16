import React, { Component } from "react";

class TableFoot extends Component {
  state = {};
  render() {
    let currItems = this.props.items;

    let totalPrice = 0;
    for (let i = 0; i < currItems.length; i++) {
      totalPrice += currItems[i].selectedQuantity * currItems[i].unitPrice;
    }
    totalPrice = parseFloat(totalPrice.toPrecision(12));

    return (
      <tfoot>
        <tr>
          <th className="hide-xs" scope="row"></th>
          <td className="hide-xs"></td>
          <td className="hide-xs"></td>
          <td>
            total: $<span className="total">{totalPrice}</span>
          </td>
          <td className="hide-xs"></td>
        </tr>
        <tr>
          <th>
            <button className="btn btn-warning" type="button">
              Continue Shopping
            </button>
          </th>
          <td className="hide-xs"></td>
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
            </button>
          </td>
        </tr>
      </tfoot>
    );
  }
}

export default TableFoot;
