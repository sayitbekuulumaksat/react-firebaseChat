import React from "react";
import Chatlist from "./chatList/ChatList";
import UserInfo from "./userInfo/UserInfo";

function List() {
  return (
    <div className='pr-2'>
      <UserInfo />
      <Chatlist />
    </div>
  );
}

export default List;
