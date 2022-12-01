import React from "react";
import { Route, Routes } from "react-router-dom";
import ChangePass from "./ChangePass";
import ForgotPass from "./ForgotPass";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import OtpPage from "./OtpPage";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpass" element={<ForgotPass />}></Route>
        <Route path="/otp" element={<OtpPage />}></Route>
        <Route path="/changepass" element={<ChangePass />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
