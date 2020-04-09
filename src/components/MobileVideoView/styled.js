import styled from 'styled-components';


export const MobileVideo = styled.section`
margin-top: -40px;
p {
font-size: smaller;
padding: 0 10px 0 10px;
text-align: justify;
}
`;

export const MobileVideoTitle = styled.section`
display:flex;
padding: 20px 10px 0 10px; 
align-items: baseline;
justify-content: space-between;

h3 {
margin: 0;
align-self: initial;
}
p {
padding: 5px 0 5px 0;
font-size: smaller;
margin-bottom: 0;
color: grey;
}`;

export const MobileCommentForm = styled.form`
textarea{
  width: 100% !important;
  font-style: normal!important;
}
.form-group {
  width: 100%;
  display: flex;
  input {
    align-self: flex-start  !important;
    width: 70% !important;
    margin:0 !important;
  }
  button {
    width: 30%;
  }
}
`;

export const CommentsViewArea = styled.div`
overflow: scroll !important;
width: 100%;
height: 70%;
`;
