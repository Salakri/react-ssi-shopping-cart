import React, { Component } from "react";

import TableHead from "./table-head";
import TableBody from "./table-body";
import TableFoot from "./table-foot";

class Table extends Component {
  state = {
    items: [
      {
        id: 0,
        title: "Product Title",
        description: "Brief Content",
        discountRate: 35,
        unitPrice: 1.99,
        imgURL:
          "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
        inStock: 5,
        selectedQuantity: 1,
      },
      {
        id: 1,
        title: "Product Title",
        description: "Brief Content",
        discountRate: 0,
        unitPrice: 100.99,
        imgURL:
          "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
        inStock: 2,
        selectedQuantity: 1,
      },
      {
        id: 2,
        title: "Product Title",
        description: "Brief Content",
        discountRate: 15,
        unitPrice: 21.99,
        imgURL:
          "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
        inStock: 10,
        selectedQuantity: 1,
      },
      {
        id: 3,
        title: "Product Title",
        description: "Brief Content",
        discountRate: 20,
        unitPrice: 91.99,
        imgURL:
          "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
        inStock: 4,
        selectedQuantity: 1,
      },
      {
        id: 4,
        title: "Product Title",
        description: "Brief Content",
        discountRate: 12,
        unitPrice: 11.99,
        imgURL:
          "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
        inStock: 3,
        selectedQuantity: 1,
      },
    ],
  };

  handleDelete = (itemId) => {
    const newItems = this.state.items.filter((i) => i.id !== itemId);
    this.setState({ items: newItems });
  };

  handleRefresh = (item) => {
    console.log("refresh", item);
  };

  handleUpdateQuantity = (item, quantity) => {
    const newItems = [...this.state.items];
    const index = newItems.indexOf(item);
    newItems[index].selectedQuantity = parseInt(quantity, 10);
    this.setState({ items: newItems });
  };

  render() {
    return (
      <table className="table table-hover">
        <TableHead />
        <TableBody
          onDelete={this.handleDelete}
          onRefresh={this.handleRefresh}
          onUpdateQuantity={this.handleUpdateQuantity}
          items={this.state.items}
        />
        <TableFoot items={this.state.items} />
      </table>
    );
  }
}

export default Table;
