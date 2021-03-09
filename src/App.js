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
  // return (
  //   <div className="App">
  //     <h1>messages list</h1>
  //     <ul>
  //       {messagesList.map(message => (
  //         <li onClick={() => setActiveChat(message.id)}>
  //           {JSON.stringify(message)} - <button onClick={() => removeMessage(message.id)}>x</button>
  //         </li>
  //       ))}
  //     </ul>
  //     <button onClick={() => clearAllMessages()}>clearAllMessages</button>
  //
  //     <hr />
  //     <br />
  //     <h1>active chat</h1>
  //     {JSON.stringify(activeMessage)}
  //     <input type="text" onChange={e => setMessage(e.target.value)} />
  //     <button onClick={() => sendMessage({...activeMessage, messages: activeMessage.messages.concat([{ id: uuid(), text: message, date: new Date().getTime() }])})}>sendMessage</button>
  //
  //     <hr />
  //     <br />
  //
  //     <hr />
  //     <br/>
  //     <br/>
  //     <hr />
  //
  //     <h1>contacts</h1>
  //     <ul>
  //       {contacts.map((user) => (
  //         <li onClick={() => openNewMessage(user)}>user: {JSON.stringify(user)} - <button onClick={() => deleteContact(user.id)}>x</button></li>
  //       ))}
  //     </ul>
  //
  //     <button onClick={() => addContact({ name: "Ali", avatar: "https://i.pravatar.cc/300"})}>add new contact</button>
  //     <button onClick={() => clearContacts()} >clearContacts</button>
  //     <hr/>
  //
  //
  //   </div>
  // );
}

export default App;
