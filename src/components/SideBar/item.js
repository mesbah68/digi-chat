import React from 'react';
import { StyledMenuItem } from './styles';

const MenuItem = ({ icon, active, onClick }) => {
  return (
    <StyledMenuItem onClick={onClick} className={active ? 'active' : ''}>
      {icon}
    </StyledMenuItem>
  );
};

export default MenuItem;