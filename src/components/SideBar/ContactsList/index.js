import React, { useState } from 'react';
import {useSelector} from "react-redux";
import {MessageSelectors, useMessageActions, UserSelectors, useUserActions} from "../../../@redux";
import { StyledListItemsWrapper, StyledListItem, StyledFabAdd, StyledUserDetail } from './styles';

const ContactsList = () => {
  const contacts = useSelector(UserSelectors.getContacts);
  const contactDetail = useSelector(UserSelectors.getContactDetail);
  const isAdding = useSelector(UserSelectors.getContactsAdding);
  const messages = useSelector(MessageSelectors.getMessagesList);
  const { setContactAdding, addContact, deleteContact } = useUserActions();
  const { setActiveChat, openNewMessage } = useMessageActions();

  const [name, setName] = useState(contactDetail.name || '');
  const [avatar, setAvatar] = useState(contactDetail.avartar || 'https://i.pravatar.cc/100');


  const handleOpenChat = (contact) => {
    const messageExists = messages.filter(msg => msg.user.id === contact.id);

    if(messageExists.length) {
      setActiveChat(messageExists[0].id);
    } else {
      openNewMessage(contact)
    }
  }


  if(isAdding || Object.keys(contactDetail).length) {
    return <StyledUserDetail>
      <div className="avatar" ><img src={avatar} alt={name} /></div>
      <div>
        نام:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        تصویر پروفایل:
        <input type="text" value={avatar} onChange={e => setAvatar(e.target.value)} />
      </div>
      <div>
        {isAdding ?
          <button onClick={() => addContact({ name, avatar })}>ثبت مخاطب</button>:
          <button onClick={() => deleteContact(contactDetail.id)}>حذف مخاطب</button>
        }
        <button className="ghost" onClick={() => setContactAdding(false)}>بازگشت</button>
      </div>
    </StyledUserDetail>
  }

  return (
    <StyledListItemsWrapper>
      {contacts.map(contact =>
        <StyledListItem role="button" onClick={() => handleOpenChat(contact)}>
          <div className="avatar">
            <img src={`${contact.avatar}?d=${contact.id}`} alt={contact.name} />
          </div>
          <div className="name">{contact.name}</div>
        </StyledListItem>
      )}

      {!isAdding ? <StyledFabAdd onClick={() => setContactAdding(true)}>+</StyledFabAdd> : null}
    </StyledListItemsWrapper>
  );
};

export default ContactsList;