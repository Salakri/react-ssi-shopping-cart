import React, { Component } from "react";
import Item from "./item";

class TableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.items.map((item) => (
          <Item
            onDelete={this.props.onDelete}
            onRefresh={this.props.onRefresh}
            onUpdateQuantity={this.props.onUpdateQuantity}
            key={item.id}
            item={item}
          ></Item>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
