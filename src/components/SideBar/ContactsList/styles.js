import styled from "styled-components";

export const StyledListItemsWrapper = styled.ul`
  max-height: 100vh;
  overflow: auto;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  border-bottom: 1px solid #efefef;
  display: flex;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  position: relative;
  
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.3);
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  
  .name {
    margin-right: 10px;
  }
`;

export const StyledFabAdd = styled.div`
  background: #a192f4;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 10px;
  bottom: 62px;
  text-align: center;
  border-radius: 50%;
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;

export const StyledUserDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
  .avatar {
    width: 120px;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  input {
    display: block;
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 7px 0 10px;
    border-radius: 5px;
    font-family: Estedad, tahoma;
  }
  
  button {
    background: #ff2626;
    border-radius: 5px;
    border: none;
    color: #fff;
    padding: 13px 0;
    width: 90%;
    margin: 5px 0;
    font-family: Estedad, tahoma;
    cursor: pointer;
    
    &.ghost {
      background: transparent;
      padding: 8px 0;
      color: #666
    }
  }
`;