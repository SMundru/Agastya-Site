import styled from 'styled-components';
import Comment from './index';


export const CommentWrapper = styled.section`
margin-top: 30px !important;
padding: 10px;
width: 100%;
background-color: ${({ theme: { color } }) => color};
border-radius: 10px;
`;

export const CommentMetaData = styled.div`
color: ${({ theme: { backgroundColor } }) => backgroundColor};
background-color: ${({ theme: { color } }) => color};
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 0.8rem;
`;

export const CommentText = styled.div`
color: ${({ theme: { backgroundColor } }) => backgroundColor};
background-color: ${({ theme: { color } }) => color};
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 0.8rem;
`;
