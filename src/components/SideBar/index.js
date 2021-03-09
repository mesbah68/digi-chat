import {useState} from "react";
import { Chat22Icon, Chat3Icon, Profile3Icon,Profile2Icon, Setting3Icon, Setting2Icon } from '@iconbox/iconly';
import MenuItem from './item';
import ContactsList from './ContactsList';
import ChatList from './ChatList';
import Setting from './Setting';
import { StyledSidebarGrid, StyledMenuItemsWrapper, StyledSidebarRenderList } from './styles';

const Index = () => {
  const [activeMenu, setActiveMenu] = useState('chatList');
  const menus = [{
    title: 'chatList',
    icons: [<Chat3Icon/>, <Chat22Icon/>],
  }, {
    title: 'contactList',
    icons: [<Profile2Icon/>, <Profile3Icon/>],
  }, {
    title: 'settings',
    icons: [<Setting2Icon/>, <Setting3Icon/>],
  }];

  const handleMenuClick = title => () => {
    setActiveMenu(title);
  };

  const renderLookUp = {
    chatList: <ChatList setActiveMenu={setActiveMenu} />,
    contactList: <ContactsList setActiveMenu={setActiveMenu} />,
    settings: <Setting setActiveMenu={setActiveMenu} />,
  };

  return (
    <StyledSidebarGrid >
      <div className="logo">
        <span style={{ color: "#ed384e"}}>دیجی‌</span>چَت <span className="version"> نسخه آزمایشی</span>
      </div>

      <StyledSidebarRenderList>
        {renderLookUp[activeMenu] || <></>}
      </StyledSidebarRenderList>

      <StyledMenuItemsWrapper >
        {menus.map((menu, index) => {
          const isSelected = activeMenu === menu.title;
          return (
            <MenuItem onClick={handleMenuClick(menu.title)} title={menu.title} icon={menu.icons[isSelected ? '0' : '1']} active={isSelected} />
          )
        })}
      </StyledMenuItemsWrapper>
    </StyledSidebarGrid>
  );
};


export default Index;