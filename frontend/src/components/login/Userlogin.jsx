import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
export default function Userlogin() {

  //change made here to add state hook and connect with backend
  const navigate = useNavigate();
  const [College_name, setCollege_name] = useState("");
  const [College_id, setCollege_id] = useState("");
  const [password, setpassword] = useState("");
  const loginuser = async (e) => {
    e.preventDefault();
    // window.alert("login..");
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        College_name,
        College_id,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Please enter valid data");
      setCollege_name("");
      setCollege_id("");
      setpassword("");
    } else {
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.alert("login sucessfully");
      navigate("/home");
    }
    console.log(res.json());
  };
  return (
    <div>
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Student Login</h2>
              <form method="POST">
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="College Name"
                    autoComplete="off"
                    name="College_name"
                    value={College_name}
                    onChange={(e) => {
                      setCollege_name(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3"
                    type="text"
                    placeholder="College ID"
                    autoComplete="off"
                    name="College_id"
                    value={College_id}
                    onChange={(e) => {
                      setCollege_id(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group">
                  <input
                    className="input--style-3 js-datepicker"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                <div className="p-t-10">
                  <button
                    className="btn btn--pill btn--green"
                    type="submit"
                    value="Log In"
                    onClick={loginuser}
                  >
                    Submit
                  </button>
                </div>
                <div className="forgot-password">
                  <a href="forgot">Forgot Password</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
