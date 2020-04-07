import styled from 'styled-components';


export const CommentWrapper = styled.section`
margin-top: 30px !important;
padding: 10px;
width: 100%;
background-color: ${({ theme: { color } }) => color};
border-radius: 10px;
`;

export const CommentMetaData = styled.div`
color: #686868;
background-color: ${({ theme: { color } }) => color};
font-family: "Courier New", Courier, monospace;
font-size: 0.6rem;
font-weight: bolder;
font-style: normal;
`;

export const CommentText = styled.div`
color: ${({ theme: { backgroundColor } }) => backgroundColor};
background-color: ${({ theme: { color } }) => color};
line-height: 1.5;
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 0.8rem;
`;
