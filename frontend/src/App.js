import "./App.css";
import { Route, Routes } from "react-router-dom";
import Userlogin from "./components/login/Userlogin";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import Setting from "./components/Setting/Settings";
import Home from "./components/Home/Home";
import Forgotpassword from "./components/login/Forgotpassword";
import ChatPage from "./components/message/ChatPage"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Userlogin />} exact />
        <Route path="/forgot" element={<Forgotpassword />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/chats" element={<ChatPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
