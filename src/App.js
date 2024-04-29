import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Employee from "./Components/Employee";
import AddEmployee from "./Components/AddEmp";
import EditEmployee from "./Components/EditEmp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path="/employee/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
