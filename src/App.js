import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMessageActions, useUserActions, MessageSelectors, UserSelectors } from './@redux';
import { GlobalStyles } from './globalStyles'
import {Cell, Grid} from "styled-css-grid";
import Sidebar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  const [message, setMessage] = useState('');


  /**
   * messages selectors
   */
  const activeMessage = useSelector(MessageSelectors.getActiveMessage);
  const messagesList = useSelector(MessageSelectors.getMessagesList);

  /**
   * user actions
   */
  const {
    addContact,
    deleteContact,
    clearContacts
  } = useUserActions();

  /**
   * message actions
   */
  const {
    openNewMessage,
    setActiveChat,
    sendMessage,
    removeMessage,
    clearAllMessages
  } = useMessageActions();

  return <>
    <GlobalStyles />
    <Grid columns={24} alignContent="stretch" gap={0}>
      <Cell width={5} height={1}>
        <Sidebar />
      </Cell>
      <Cell width={19} height={1}>
        <Content />
      </Cell>
    </Grid>
    </>;
}

export default App;
