import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {MessageSelectors, useMessageActions} from "../../../@redux";
import {StyledFabAdd, StyledListItem, StyledListItemsWrapper} from "../ContactsList/styles";
import {EmptyContent} from "../../Content/styles";

const ChatList = ({ setActiveMenu }) => {
  const messagesList = useSelector(MessageSelectors.getMessagesList);

  /**
   * message actions
   */
  const {setActiveChat } = useMessageActions();

  return (
    <StyledListItemsWrapper>
      {!messagesList.length ? <EmptyContent>یک مخاطب انتخاب کنید و چت خود را شروع کنید</EmptyContent>: null}
      {messagesList.map(msg =>
        <StyledListItem role="button" onClick={() => setActiveChat(msg.id)}>
          <div className="avatar">
            <img src={msg.user.avatar} alt={msg.user.name} />
          </div>
          <div className="name">{msg.messages[msg.messages.length -1]?.text}</div>
        </StyledListItem>
      )}

      <StyledFabAdd onClick={() => setActiveMenu('contactList')}>+</StyledFabAdd>
    </StyledListItemsWrapper>
  );
};

ChatList.propTypes = {
  setActiveMenu: PropTypes.func,
}

export default ChatList;