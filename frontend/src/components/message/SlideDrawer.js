import React, { useState } from "react";
import "./SlideDrawer.css";
import axios from "axios";
import ChatLoading from "./ChatLoading";
//import UserListItem from "./useravatar/UserListItem";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { Spinner } from "@chakra-ui/spinner";
import { ChatState } from "../../context/chatProvider";
import { Avatar } from "@chakra-ui/avatar";
import { getSender } from "./config/ChatLogics";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";

const SlideDrawer = () => {
  const {
    setSelectedChat,
    user,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setsearch] = useState("");
  const [searchresult, setsearchresult] = useState([]);
  const [loading, setloading] = useState(false);
  const [loadingChat, setloadingChat] = useState(false);
  const toast = useToast();
  const handlesearch = async () => {
     console.log(user.user.token);
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    } else {
      // console.log(search);
      try {
        setloading(true);

        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.get(`/message?search=${search}`, config);

        setloading(false);
        JSON.stringify(data);
        // data.map((user) => {
        //   console.log("from search ");
        //   console.log(user);
        // });
        setsearchresult(data);
      } catch (e) {
        setloading(false);
        toast({
          title: "Error Occured!",
          description: "Failed to Load the Search Results",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    }
  };

  const accessChat = async (userId) => {
    console.log("from access chat" + userId);
    try {
      setloadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post("/chat", { userId }, config);
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      console.log(data);
      setSelectedChat(data);
      setloadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <div>
          <Menu>
            <MenuButton p={1}>
              <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              />
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            <MenuList pl={2}>
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {`New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box d="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              <Button onClick={handlesearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchresult?.map((user) => (
                <div key={user._id}>
                  <Box
                    onClick={() => accessChat(user._id)}
                    cursor="pointer"
                    bg="#E8E8E8"
                    _hover={{
                      background: "#38B2AC",
                      color: "white",
                    }}
                    w="100%"
                    d="flex"
                    alignItems="center"
                    color="black"
                    px={3}
                    py={2}
                    mb={2}
                    borderRadius="lg"
                  >
                    <Avatar
                      mr={2}
                      size="sm"
                      cursor="pointer"
                      name={user.name}
                      src={user.pic}
                    />
                    <Box>
                      <Text>{user.name}</Text>
                      <Text fontSize="xs">
                        <b>Email : </b>
                        {user.email}
                      </Text>
                    </Box>
                  </Box>
                </div>
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SlideDrawer;
