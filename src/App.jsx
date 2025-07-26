import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import VendorBody from "./Components/Vendor_Side/VendorBody/VendorBody";
import Layout from "./Components/Layout";
import SignIn from "./Components/Sign/SignIn/SignIn";
import SignUp from "./Components/Sign/SignUp/SignUp";

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<VendorBody />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;