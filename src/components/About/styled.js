import styled from 'styled-components';

export const AboutWrapper = styled.section`
height: 100%;
overflow: hidden;

    
@media (min-width:481px)  { 
margin-top: -20px;
}

@media (min-width:641px)  { 
margin-top: -20px;
 }
 
@media (min-width:961px)  {
margin-top: -20px;
  }
`;


export const BasicInformation = styled.section`
  text-align: center;
  font-size: 1vw;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  
@media (min-width:320px)  { 
    font-size: 14px;
    p {
      font-size: 10px;
      }
    img {
       width: 80px;
       height: auto;
       }
   }
    
@media (min-width:481px)  { 
   font-size: 6px;
    p {
      font-size: 6px;
      }
    img {
       width: 40px;
       height: auto;
      }
}

@media (min-width:641px)  { 
   font-size: 10px;
    p {
      font-size: 10px;
      }
    img {
       width: 50px;
       height: auto;
       }
 }
 
@media (min-width:961px)  {
   font-size: 10px;
    p {
      font-size: 10px;
      }
    img {
       width: 80px;
       height: auto;
       }
  }
  
@media (min-width:1025px) {
   font-size: 10px;
    p {
      font-size: 10px;
      }
    img {
       width: 80px;
       height: auto;
       }
  }
  
@media (min-width:1281px) { 
   font-size: 14px;
    p {
      font-size: 14px;
      }
    img {
       width: 120px;
       height: auto;
       }
 }
   
  h1 {
    font-size: 2em;
    margin: .67em 0;
  }

  p {
    margin: .67em 0;
  }

  img {
    border-radius: 50%;
  }
`;

export const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;
  
  @media (max-width: 414px) {
      font-size: 30px;
  }

  a {
    padding: 0 6px;
  }
  
  
  @media (min-width:320px)  { 
    font-size: 18px
    }
    
@media (min-width:481px)  { 
   font-size: 6px;
    p {
      font-size: 6px;
      }
    img {
       width: 40px;
       height: auto;
      }
}

@media (min-width:641px)  { 
   font-size: 10px;
    p {
      font-size: 10px;
      }
    img {
       width: 50px;
       height: auto;
       }
 }
 
@media (min-width:961px)  {
   font-size: 10px;
    p {
      font-size: 10px;
      }
    img {
       width: 80px;
       height: auto;
       }
  }
  
@media (min-width:1025px) {
   font-size: 10px;
    p {
      font-size: 10px;
      }
    img {
       width: 80px;
       height: auto;
       }
  }
  
@media (min-width:1281px) { 
   font-size: 14px;
    p {
      font-size: 14px;
      }
    img {
       width: 120px;
       height: auto;
       }
 }
`;

export const MDInformation = styled.section`
position: relative;
  width: 30%;
  font-size: 1vw;
  text-align: left;
  margin: 0 auto;
  height: 100%;
  overflow: hidden !important;
  
 & > div {
     height: 70%;
     overflow: scroll;
  }
  
  h2 {
    font-size: 1.2em;
    margin: .67em 0;
  }

  ul {
    margin: 16px 0 0;
    padding: 0 0 5px 20px;
    line-height: 2em;
    list-style-type: disc;
  }

  li ul {
    margin: 0 0 16px;
    padding: 0 0 0 20px;
  }

  a {
    text-decoration: underline;
  }
   
  @media (max-width: 414px) {
      width: 80%;
      text-align: left;
      margin: 0 auto;
      font-size: 4vw;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({theme: {color}}) => color};
  background-color: ${({theme: {backgroundColor}}) => backgroundColor};
  border: 1px solid ${({theme: {color}}) => color};
  border-radius: 4px;
  outline: 0;
`;
