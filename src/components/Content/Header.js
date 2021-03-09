import React from 'react';
import {Game3Icon, Search3Icon} from "@iconbox/iconly";
import {StyledHeader} from "./styles";
import {MessageSelectors, useUserActions} from "../../@redux";
import {useSelector} from "react-redux";

const Header = () => {
  /**
   * Message selectors
   */
  const activeMessage = useSelector(MessageSelectors.getActiveMessage);
  console.log(activeMessage);

  /**
   * User actions
   */
  const { setContactDetail } = useUserActions();
  return (
    <StyledHeader>
      <div role="button" onClick={() => setContactDetail(activeMessage.user)} className="contact">
        <div className="contact-avatar">
          <img src={activeMessage.user.avatar} alt={activeMessage.user.name} />
        </div>
        <div className="contact-name">{activeMessage.user.name}</div>
      </div>

      <div className="actions">
        <div><Game3Icon /></div>
        <div><Search3Icon /></div>
      </div>
    </StyledHeader>
  );
};

export default Header;