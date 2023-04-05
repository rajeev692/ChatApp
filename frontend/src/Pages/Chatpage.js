// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {

  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

    // const [chats, setChats] = useState([])
    // const fetchChats = async () => {
    //     const {data} = await axios.get("/api/chat");
    //     console.log(data);
    //     setChats(data);
    // };
    // useEffect(() => {
    //     // fetchChats();
    //     console.log("HELLO")
    // }, []);

    return (
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
          {/* {user && <MyChats/>}
          {user && <ChatBox/>} */}
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    );
  };
  
  export default Chatpage;
