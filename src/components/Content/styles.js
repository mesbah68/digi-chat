import styled from "styled-components";

export const StyledContent = styled.main`
  background-image: url(./pattern-6.svg);
  background-repeat: repeat;
  min-height: calc(100vh - 95px);
  position: relative;
  padding-top: 45px;
  padding-bottom: 50px;
`;

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  color: #a292f5;
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.06);
  height: 45px;
  background: #fff;
  padding: 0 20px;
  
  .contact {
    display: flex;
    align-items: center;
    .contact-avatar {
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
    .contact-name {
      color: #6f6f6f;
      margin-right: 10px;
      font-weight: 500;
      cursor: pointer;
    }
  }
  .actions {
    margin-right: auto;
    display: flex;
    margin-left: -6px !important;
    > div {
      cursor: pointer;
      padding: 10px;
    }
    svg {
      height: 26px !important;
      width: 23px !important;
      margin-top: 8px !important;
      fill: #9c9c9c;
    }
  }
`;

export const StyledFooter = styled.form`
  position: absolute;
  bottom: 0;
  color: #a292f5;
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  box-shadow: -5px 0 30px -10px rgba(0,0,0,0.16);
  height: 50px;
  background: #fff;
  padding: 0 20px;
  
  input {
    height: 50px;
    width: 100%;
    border: none;
    font-family: Estedad, tahoma;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
  button{
    border: none;
    background: #fff;
    font-family: Estedad, tahoma;

    &:focus {
      outline: none;
    }
    svg {
      width: 20px !important;
      height: 22px !important;
      fill: #a292f5;
    }
  }
  .action-r {
    margin-top: 8px;
    
  }
  .send {
    margin-right: 13px;
    background: #a292f5;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    padding: 5px 24px;
    font-weight: 500;
  }
`;

export const EmptyContent = styled.div`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Estedad, tahoma;
  font-size: 16px;
  color: #b3afaf;
  font-weight: 500;
  text-align: center;
  margin: 20px
`;
export const StyledMenuWrapper = styled.div`
  background-color: #fff;
  padding: 10px;
  text-align: left;
  display: ${props => props.visibility ? 'inline-block' : 'none'};
  cursor: pointer;
  margin: 5px;
  padding: 0 50px;
  border: 1px solid #cccccc59;
  position: absolute;
  left: 0;
  z-index: 99;
`;