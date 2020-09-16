import React from "react";
import "./App.css";
import Table from "./components/table";
import Form from "./components/form";

function App() {
  return (
    <div>
      <div className="container">
        <Table />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
