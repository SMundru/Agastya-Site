import TextareaAutosize from 'react-textarea-autosize';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../Common/constants';

export const CommentButton = styled(Button)`
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

export const CommentInputBox = styled(TextareaAutosize)`
  position: relative;
  width: 100% !important;
  outline: none;
  border-width: 0 0 2px;
  height: 2.4em;
  line-height: 2.4em;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 12px;
  font-style: normal;
  z-index: 1000;

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

export const CommenterName = styled.input`
  margin-top :10px;
  position: relative;
  width: 80% !important;
  outline: none;
  border-width: 0 0 2px !important;
  border-color: ${({ theme: { color } }) => color};
  height: 2.4em;
  line-height: 2.4em;
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
`;


export const CommentFrom = styled.form`
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  margin: 0 10px 0 10px !important;
        -webkit-align-items: baseline;

  @media (max-width: 414px) {
  .form-group {
      display: flex;
  }
  }
`;
