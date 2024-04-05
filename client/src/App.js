import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./login";
import Register from "./Register";
import Create from "./CRUD/Create";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";
import  Delete  from "./CRUD/Delete";
import Home from "./Home";
import Navbar from "./navfoot/Navbar";
import Footer from "./navfoot/Footer";

function App() {
  return (
    
   <BrowserRouter>
   <div className="fixed bg-white w-full">
   <Navbar />
   </div>
   <Routes>
   
   <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/create" element={<Create />}/>
    <Route path="/read" element={<Read />}/>
    <Route path="/update" element={<Update />}/>
    <Route path="/delete" element={<Delete />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
