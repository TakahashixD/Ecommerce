import React from "react";
import CustomersList from "./CustomersList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" exact element={<Login></Login>} />
          <Route path="/dashboard" exact element={<Dashboard></Dashboard>} />
          <Route
            path="/customers"
            exact
            element={<CustomersList></CustomersList>}
          />
          <Route path="/cart" exact element={<ShoppingCart></ShoppingCart>} />
          <Route path="*" element={<NoMatchPage></NoMatchPage>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
