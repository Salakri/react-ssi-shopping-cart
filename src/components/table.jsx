import React, { Component } from "react";
import "../App.css";
import TableHead from "./table-head";
import TableBody from "./table-body";
import TableFoot from "./table-foot";

class Table extends Component {
  state = {};
  render() {
    return (
      <table className="table table-hover">
        <TableHead />
        {/* <TableBody />
        <TableFoot /> */}
      </table>
    );
  }
}

export default Table;
