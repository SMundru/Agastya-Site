import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { Button } from 'react-bootstrap';
import { PRIMARY_COLOR } from '~/components/Common/constants';


export const VideoDetailCol = styled.div`{
   margin-left: 50px; 
   margin-right: 50px; 
   width=100%
   }
`;


export const PostContent = styled.section`
  line-height: 1.6em;
   width: 50%;
   margin-left: 50px; 

  h2 {
    margin: 24px 0 10px;
    font-size: 28px;
    margin: 0 auto; 

  }

  h3 {
    margin: 24px 0 10px;
    font-size: 24px;
    text-align: center

  }

  h4 {
    margin: 24px 0 10px;
    font-size: 21px;
  }

  p {
    margin: 16px 0 0;
    font-size: 16px;
        text-align: center

  }

  blockquote {
    margin: 40px 0 0;
    padding: 0 0 0 2em;
    line-height: 1.2em;
    color: #aaa;
    font-style: italic;
    font-family: 'Kaushan Script';
    font-size: 24px;
  }

  pre {
    margin: 20px 0 0;
  }
`;

export const CommentBox = styled(TextareaAutosize)`
  margin-top :10px;
  position: relative;
  width: 80%; !important
  outline: 0;
  border-width: 0 0 2px;
  height: 2.4em;
  line-height: 2.4em;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  font-size: 14px;
  font-style: italic
  z-index: 1000;

  @media (max-width: 414px) {
    display: none;
    right: 0;
    left: 0;
    width: 100%;
  }
 
  &:focus {
    border-color: ${PRIMARY_COLOR}; !important
  }

`;


export const CommentButton = styled(Button)`
  margin-left: 20px;
  background: ${({ theme: { backgroundColor } }) => backgroundColor};;
  border: 2px solid ${({ theme: { color } }) => color};
  color: ${({ theme: { color } }) => color};
  border-radius: 3px;
  width:10%
  padding: 0.5rem 1rem;
  vertical-align: text-bottom;
  font-size: 0.8rem;`;
