import React from 'react';
import { StyledChatWrapper, StyledChatLine, StyledChat } from './styles';
import {useSelector} from "react-redux";
import {MessageSelectors} from "../../../@redux";

const Chat = () => {
  const activeMessage = useSelector(MessageSelectors.getActiveMessage);

  return (
    <StyledChatWrapper>
      {activeMessage.messages.map(msg => (
        <StyledChatLine className={msg.byMe ? "me" : "you"}>
          <StyledChat className={msg.byMe ? "me" : "you"}>
            {msg.text}
          </StyledChat>
        </StyledChatLine>
      ))}
    </StyledChatWrapper>
  );
};

export default Chat;