import styled from "styled-components";
import {PRIMARY_COLOR} from "../Common/constants";
import { Button } from 'react-bootstrap';

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 10%;

.login-error {
    color: red;
    border: ${({theme: {color}}) => color};
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 14px;
}
  
input {
  width: 20%;
  vertical-align: middle;
  border-width: 0 0 2px !important;
  border-color: ${({theme: {color}}) => color};
  color: ${({theme: {color}}) => color}!important;
  background: ${({theme: {backgroundColor}}) => backgroundColor} !important;
  font-size: 12px;
  font-style: normal;
  z-index: 1000;
  line-height: 3rem;
  text-align: center;
  @media (max-width: 440px) {
    width: 40%;
    line-height: 2rem;
    text-align: center;
  }
}

@media (max-width: 440px) {
    margin-top: 70px;
}

&:focus {
    border-color: ${PRIMARY_COLOR} !important;
}
`

export const FormButton = styled(Button)`
  margin-top: 2%;
  background: ${({ theme: { backgroundColor } }) => backgroundColor};;
  border: 2px solid ${({ theme: { color } }) => color};
  color: ${({ theme: { color } }) => color};
  border-radius: 3px;
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
    margin-top: 25px;
  }
`;
