import React from "react";
import Forgotpassword from "./Forgotpassword";
import Userlogin from "./Userlogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

export default function Login() {
  return (
    <Routes>
      <Route path="/login" element={<Userlogin />} />
      <Route path="/forgot" element={<Forgotpassword />} />
      <Route path="/" element={<Home />} />
     
      <Route path="/profile/:username" element={<Profile/>}/>
    </Routes>
  );
}
 