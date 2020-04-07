import TextareaAutosize from 'react-textarea-autosize';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../Common/constants';

export const CommentButton = styled(Button)`
  margin-left: 5%;
  background: ${({ theme: { backgroundColor } }) => backgroundColor};;
  border: 2px solid ${({ theme: { color } }) => color};
  color: ${({ theme: { color } }) => color};
  border-radius: 3px;
  width:15%;
  padding: 0.5rem 0.5rem;
  font-size: 70%;
  text-transform: uppercase;
  
  &:focus {
    color: ${({ theme: { backgroundColor } }) => backgroundColor};
    background-color: ${({ theme: { color } }) => color}; 
  }
  &:hover {
    color: ${({ theme: { backgroundColor } }) => backgroundColor};
    background-color: ${({ theme: { color } }) => color}; 
    border: 2px solid ${({ theme: { color } }) => color};
  }`;

export const CommentInputBox = styled(TextareaAutosize)`
  margin-top :10px;
  position: relative;
  width: 100% !important;
  outline: none;
  border-width: 0 0 2px;
  height: 2.4em;
  line-height: 2.4em;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 14px;
  font-style: italic;
  z-index: 1000;

  @media (max-width: 414px) {
    display: none;
    right: 0;
    left: 0;
    width: 100%;
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
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 14px;
  font-style: italic;
  z-index: 1000;

  @media (max-width: 414px) {
    display: none;
    right: 0;
    left: 0;
    width: 100%;
  }
 
  &:focus {
    border-color: ${PRIMARY_COLOR} !important;
  }
\`;
`;
