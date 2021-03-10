import React, {useState} from 'react';
import { Search3Icon} from "@iconbox/iconly";
import { AlignTextDistributeIcon } from '@iconbox/alexandra';
import {StyledHeader, StyledMenuWrapper} from "./styles";
import {MessageSelectors, useUserActions,useMessageActions} from "../../@redux";
import {useSelector} from "react-redux";

const Header = () => {
  /**
   * Message selectors
   */
  const activeMessage = useSelector(MessageSelectors.getActiveMessage);
  const [showMenu, setShowMenu] = useState(false);
  console.log(activeMessage);

   /**
   * message actions
   */
  const {removeMessage} = useMessageActions();

  /**
   * User actions
   */
  const { setContactDetail } = useUserActions();

  const handleRemoveMessage = () => {
    setShowMenu(!showMenu);
  }
  return (
    <>
    <StyledHeader>
      <div role="button" onClick={() => setContactDetail(activeMessage.user)} className="contact">
        <div className="contact-avatar">
          <img src={activeMessage.user.avatar} alt={activeMessage.user.name} />
        </div>
        <div className="contact-name">{activeMessage.user.name}</div>
      </div>

      <div className="actions">
        <div><Search3Icon /></div>
        <div onClick={handleRemoveMessage}><AlignTextDistributeIcon /></div>
      </div>
    </StyledHeader>
    <StyledMenuWrapper visibility={showMenu} onClick={() => 
    removeMessage(activeMessage.id)}>
      <p>delete chat</p>
    </StyledMenuWrapper>
  </>
  );
};

export default Header;