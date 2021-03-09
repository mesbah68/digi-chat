import styled from "styled-components";

export const StyledChatWrapper = styled.section`
  padding: 10px;
  overflow: auto;
`;

export const StyledChatLine = styled.div`
  position: relative;
  
  &.you {
    text-align: left;
  }
`;

export const StyledChat = styled.div`
  border-radius: 5px;
  margin: 4px;
  padding: 9px;
  display: inline-flex;
  box-shadow: 0 10px 13px -9px #a695c691;
  font-size: 15px;
    
  &.me {
    background: #a292f5;
    color: #fff;
  }
  &.you {
    background: #fff;
    text-align: left;
    right: calc(100% + 5px);
    right: -moz-calc(100% + 5px);
    margin-left: 5px;
    top: 5px;
  }
`;
