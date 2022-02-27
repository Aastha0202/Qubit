import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SlideDrawer from "./SlideDrawer";
import MyChats from "./MyChats";
import ChatBox from "./ChatBox";
import { ChatState } from "../../context/chatProvider";
// import "./messagepage.css";
const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  // console.log(user);
  return (
    <>
      <Navbar />
      <div style={{ width: "100%" }}>
        {user && <SlideDrawer />}
        <Box
          d="flex"
          justifyContent="space-between"
          w="100%"
          h="80.5vh"
          p="10px"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    </>
  );
};
export default ChatPage;
