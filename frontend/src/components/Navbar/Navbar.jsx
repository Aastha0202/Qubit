import { useState, useContext, React } from "react";
import { NavLink ,Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import {
  IoChatbubbleEllipsesSharp,
  IoHome,
  IoSettingsSharp,
} from "react-icons/io5";
import "./Navbar.css";
import ReactSearchBox from "react-search-box";
import SearchIcon from "@material-ui/icons/Search";
import UploadPost from "../Uploadpost/UploadPost";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          {/*first logo */}
          <Link to="/">
           <h2>Qurbit</h2>
          </Link>
         
        </div>
        {/*2nd search */}
        <div className="search-box">
          <ReactSearchBox className="rsb" placeholder="Search" />
        </div>
        <div className="menu-link">
          {/*3nd menu bar */}
          <ul>
            <li>
              <NavLink to="/">
                <IoHome className="padding-icon" />
              </NavLink>
              <NavLink to="/" onClick={handleOpen}>
                <IoIosAddCircle className="padding-icon" />
              </NavLink>
              {open && <UploadPost open={open} handleClose={handleClose} />}
              <NavLink to="/">
                <IoChatbubbleEllipsesSharp className="padding-icon" />
              </NavLink>
              <NavLink to="/">
                <IoSettingsSharp className="padding-icon" />
              </NavLink>
              <NavLink to="/">
                <CgProfile className="padding-icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
