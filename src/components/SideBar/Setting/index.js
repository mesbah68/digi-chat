import React from 'react';
import {useMessageActions, useUserActions} from "../../../@redux";
import { StyledSettingWrapper } from './styles';

const Setting = () => {
  /**
   * user actions
   */
  const {clearContacts} = useUserActions();

  /**
   * message actions
   */
  const {clearAllMessages} = useMessageActions();

  return (
    <StyledSettingWrapper>
      <button onClick={() => clearAllMessages()}>حذف همه چت ها</button>
      <button onClick={() => clearContacts()}>حذف همه مخاطبان</button>
    </StyledSettingWrapper>
  );
};

export default Setting;