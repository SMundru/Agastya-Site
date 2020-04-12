import styled from "styled-components";
import {InputGroup, Button} from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import {PRIMARY_COLOR} from "../Common/constants";

// background: ${({ theme: { backgroundColor } }) => backgroundColor};;
// border: 2px solid ${({ theme: { color } }) => color};


export const Files = styled.section`
position: relative;
text-align: center;
label{
 line-height: 1.5;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1.2rem;
  font-weight: bolder;
}

input {
    outline: 2px solid ${({theme: {color}}) => color};
    outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear;
    padding: 85px 0 95px 40%;
    text-align: center !important;
    margin: 0;
    width: 100% !important;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 1rem;
    font-weight: bolder;}

input:focus{     outline: 2px dashed ${({theme: {color}}) => color};  outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s left: ;inear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear; border:1px solid ${({theme: {color}}) => color};
}

:after {  pointer-events: none;
    position: absolute;
    left: 0;
    width: 50px;
    right: 0;
    height: 56px;
    content: "";
    display: block;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
}

:before {
    position: absolute;
    bottom: 10px;
    left: 0;  pointer-events: none;
    width: 100%;
    right: 0;
    height: 57px;
    content: " or drag it here. ";
    display: block;
    margin: 0 auto;
    color: ${({ theme: { color } }) => color};
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
}
`

export const UploadInputGroup = styled(InputGroup)`
padding: 0 20px 0 20px;
margin-top: 20px;
display: flex;
align-items: baseline;
align-content: baseline;
flex-direction: row;
width: 100%;
label {
  display: inline-block;
  margin-top: 10px;
  color: ${({ theme: { color } }) => color};
  width:20%;
  font-weight: bold;
  margin-bottom: 0;
  vertical-align: text-bottom;
  padding-bottom: 0;
}
input {
  position: relative;
  width: 80% !important;
  outline: none;
  border-width: 0 0 2px !important;
  border-color: ${({ theme: { color } }) => color};
  color: ${({ theme: { color } }) => color}!important;
  background: ${({ theme: { backgroundColor } }) => backgroundColor} !important;
  font-size: 12px;
  font-style: normal;
  z-index: 1000;


  @media (max-width: 414px) {
      display: flex;
      align-self: flex-start  !important;
      width: 80% !important;
    }
  &:focus {
    border-color: ${PRIMARY_COLOR} !important;
  }
}

button {
  align-self: center;
  width: 100%;
  margin: 5% 40% 0 40%;
}
`

export const UploadButton = styled(Button)`
  margin-left: 3%;
  background: ${({ theme: { backgroundColor } }) => backgroundColor};;
  border: 2px solid ${({ theme: { color } }) => color};
  color: ${({ theme: { color } }) => color};
  border-radius: 3px;
  width:17%;
  padding: 0.5rem 0.5rem;
  font-size: 70%;
  text-transform: uppercase;
  font-weight: bold;
  
  &:focus {
    color: ${({ theme: { backgroundColor } }) => backgroundColor};
    background-color: ${({ theme: { color } }) => color}; 
  }
  &:hover {
    color: ${({ theme: { backgroundColor } }) => backgroundColor};
    background-color: ${({ theme: { color } }) => color}; 
    border: 2px solid ${({ theme: { color } }) => color};
  }
  @media (max-width: 414px) {
    width: 20%;
    font-size: 50%;
    height: 30px;
    padding: 0;
    margin-top: 9px;
  }
`;

export const UploadTextInputField = styled(TextareaAutosize)`
  position: relative;
  outline: none;
  border-width: 0 0 2px;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 12px;
  font-style: normal;
  z-index: 1000;
  width: 80%;

  @media (max-width: 414px) {
   textarea {
    width: 100% !important;
    font-style: normal!important;
    }
  }
 
  &:focus {
    border-color: ${PRIMARY_COLOR} !important;
  }
`;
