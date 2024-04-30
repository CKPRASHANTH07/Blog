import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import Articles from "./pages/Articles";
import Update from "./pages/Update";
import Home from "./pages/Home";
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
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/Create" element={<Create />}/>
    <Route path="/Articles" element={<Articles />}/>
    <Route path="/Update" element={<Update />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
