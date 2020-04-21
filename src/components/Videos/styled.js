import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const PostContent = styled.section`
margin: 0 10px 0 10px;
  line-height: 1.6em;
  width: 300px;

  h2 {
    margin: 24px 0 10px;
    font-size: 28px;
  }

  h3 {
    margin: 24px 0 10px;
    font-size: 24px;
  }

  h4 {
    margin: 24px 0 10px;
    font-size: 21px;
  }

  p {
    margin: 16px 0 0;
    font-size: 16px;
  }

  blockquote {
    margin: 40px 0 0;
    padding: 0 0 0 2em;
    line-height: 1.2em;
    color: #aaa;
    font-style: italic;
    font-family: 'Kaushan Script',sans-serif;
    font-size: 24px;
  }

  pre {
    margin: 20px 0 0;
  }
`;


export const VideosRow = styled(Row)`
margin: 100px 0 0 0;
padding: 0 20px 0 20px;
align-items: center;
justify-content: center;
height: 0 !important;
`;
