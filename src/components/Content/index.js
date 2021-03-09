import React from 'react';
import {useSelector} from "react-redux";
import Header from './Header';
import Chat from './Chat';
import Send from './Send';
import {MessageSelectors} from "../../@redux";
import { StyledContent, EmptyContent } from './styles'

const Content = () => {
  /**
   * Message selectors
   */
  const activeMessage = useSelector(MessageSelectors.getActiveMessage);

  return activeMessage && Object.keys(activeMessage).length ? (
    <StyledContent>
      <Header />
      <Chat />
      <Send />
    </StyledContent>
  ) : <EmptyContent>
    چت خالی است، از منوی کناری شروع کنید
  </EmptyContent>;
};

export default Content;