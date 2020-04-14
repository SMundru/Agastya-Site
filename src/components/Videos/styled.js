import styled from 'styled-components';

export const PostContent = styled.section`
margin: 0 20px 0 20px;
  padding-top: 70px;
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

export const PostsWrapper = styled.section`
  margin: auto;
  max-width: 1176px;
  height: 100%;
  font-size: 0;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
  .row{
    height:100%
  }

  h1 {
    margin: .67em 0;
    font-size: 32px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }
`;
