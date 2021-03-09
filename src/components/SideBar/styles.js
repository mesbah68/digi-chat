import styled from 'styled-components';

export const StyledSidebarGrid = styled.aside`
  background: #fef8f8;
  border-right: 1px solid rgba(0,0,0,0.06);;
  position: relative;
  height: 100vh;
  
  .logo {
    position: absolute;
    top: 0;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    color: #a292f5;
    width: 100%;
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    
    .version {
      color: rgb(206 206 206);
      margin-right: 6px;
      font-size: 11px;
      line-height: 1;
      margin-top: 2px;
      width: 40px
    }
  }
`;

export const StyledMenuItemsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.035);
  height: 50px;
`;

export const StyledMenuItem = styled.span`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 10px 0;
  color: #bfc0c5;
  cursor: pointer;
  flex: 0 0 33.33%;
  &.active {
    svg {
      color: #f39b29;
      fill: #f39b29 !important;
    }
  }
  svg {
    color: #bfc0c5;
    width: 32px !important;
    height: 32px !important;
  }
`;

export const StyledSidebarRenderList = styled.div`
  min-height: calc(100vh - 95px);
  position: relative;
  padding-top: 45px;
  padding-bottom: 50px;
`;