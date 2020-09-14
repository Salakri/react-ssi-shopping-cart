import React, { Component } from "react";
import "../App.css";

class TableHead extends Component {
  state = {};
  render() {
    return (
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Discount</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
    );
  }
}

export default TableHead;
