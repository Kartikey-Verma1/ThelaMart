import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import VendorBody from "./Components/Vendor_Side/VendorBody/VendorBody";
import Layout from "./Components/Layout";
import SignIn from "./Components/Sign/SignIn/SignIn";
import SignUp from "./Components/Sign/SignUp/SignUp";
import { useEffect, useState } from "react";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import AddItems from "./Components/AddItems/AddItems";

const App = ()=>{
  const [user, setuser] = useState(()=>{
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  useEffect(()=>{
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  },[user])
  
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout user={user} setuser={setuser}/>}>

          <Route path="/" element={<VendorBody />} />
          {user && <Route path="/profile" element={<Profile user={user} setuser={setuser}/>} />}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/additems" element={<AddItems user={user} setuser={setuser}/>} />

        </Route>

        <Route path="/signin" element={<SignIn setuser={setuser} />} />
        <Route path="/signup" element={<SignUp setuser={setuser} />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App;