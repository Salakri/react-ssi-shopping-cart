import React, { useState } from "react";

import TableHead from "./table-head";
import TableBody from "./table-body";
import TableFoot from "./table-foot";

import Form from "../components/form";

function Table() {
  const [table, setTable] = useState([
    {
      modalShow: false,
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
    },
  ]);

  const handleDelete = (itemId) => {
    const newTable = [...table];
    newTable[0].items = newTable[0].items.filter((i) => i.id !== itemId);
    setTable(newTable);
  };

  const handleRefresh = (item) => {
    console.log("refresh", item);
  };

  const handleUpdateQuantity = (item, quantity) => {
    const newTable = [...table];
    const index = newTable[0].items.indexOf(item);
    newTable[0].items[index].selectedQuantity = parseInt(quantity, 10);
    setTable(newTable);
  };

  const handleCheckout = (items, totalPrice) => {
    const newTable = [...table];
    newTable[0].modalShow = true;
    setTable(newTable);
  };

  const handleCancelCheckout = () => {
    const newTable = [...table];
    newTable[0].modalShow = false;
    setTable(newTable);
  };

  return (
    <div>
      <table className="table table-hover">
        <TableHead />
        <TableBody
          onDelete={handleDelete}
          onRefresh={handleRefresh}
          onUpdateQuantity={handleUpdateQuantity}
          items={table[0].items}
        />
        <TableFoot onCheckout={handleCheckout} items={table[0].items} />
      </table>
      <Form
        onHide={handleCancelCheckout}
        items={table[0].items}
        modalShow={table[0].modalShow}
      />
    </div>
  );
}

// class Table extends Component {
//   state = {
//     modalShow: false,
//     items: [
//       {
//         id: 0,
//         title: "Product Title",
//         description: "Brief Content",
//         discountRate: 35,
//         unitPrice: 1.99,
//         imgURL:
//           "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
//         inStock: 5,
//         selectedQuantity: 1,
//       },
//       {
//         id: 1,
//         title: "Product Title",
//         description: "Brief Content",
//         discountRate: 0,
//         unitPrice: 100.99,
//         imgURL:
//           "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
//         inStock: 2,
//         selectedQuantity: 1,
//       },
//       {
//         id: 2,
//         title: "Product Title",
//         description: "Brief Content",
//         discountRate: 15,
//         unitPrice: 21.99,
//         imgURL:
//           "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
//         inStock: 10,
//         selectedQuantity: 1,
//       },
//       {
//         id: 3,
//         title: "Product Title",
//         description: "Brief Content",
//         discountRate: 20,
//         unitPrice: 91.99,
//         imgURL:
//           "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
//         inStock: 4,
//         selectedQuantity: 1,
//       },
//       {
//         id: 4,
//         title: "Product Title",
//         description: "Brief Content",
//         discountRate: 12,
//         unitPrice: 11.99,
//         imgURL:
//           "https://www.kfc.ca/Content/OnlineOrderingImages/StaticPage/story/story_28_lrg.jpg",
//         inStock: 3,
//         selectedQuantity: 1,
//       },
//     ],
//   };

//   handleDelete = (itemId) => {
//     const newItems = this.state.items.filter((i) => i.id !== itemId);
//     this.setState({ items: newItems });
//   };

//   handleRefresh = (item) => {
//     console.log("refresh", item);
//   };

//   handleUpdateQuantity = (item, quantity) => {
//     const newItems = [...this.state.items];
//     const index = newItems.indexOf(item);
//     newItems[index].selectedQuantity = parseInt(quantity, 10);
//     this.setState({ items: newItems });
//   };

//   handleCheckout = (items, totalPrice) => {
//     this.setState({ modalShow: true });
//   };

//   handleCancelCheckout = () => {
//     this.setState({ modalShow: false });
//   };

//   render() {
//     return (
//       <div>
//         <table className="table table-hover">
//           <TableHead />
//           <TableBody
//             onDelete={this.handleDelete}
//             onRefresh={this.handleRefresh}
//             onUpdateQuantity={this.handleUpdateQuantity}
//             items={this.state.items}
//           />
//           <TableFoot
//             onCheckout={this.handleCheckout}
//             items={this.state.items}
//           />
//         </table>
//         <Form
//           onHide={this.handleCancelCheckout}
//           items={this.state.items}
//           modalShow={this.state.modalShow}
//         />
//       </div>
//     );
//   }
// }

export default Table;
