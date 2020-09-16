import React, { Component } from "react";

class TableHead extends Component {
  state = {
    headName: ["Product", "Discount", "Quantity", "Price", "Action"],
  };

  render() {
    return (
      <thead>
        <tr>
          {this.state.headName.map((headers, id) => (
            <th scope="col" key={id}>
              {headers}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
