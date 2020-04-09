import styled from 'styled-components';
import { Player } from 'video-react';
import { Row } from 'react-bootstrap';
import { PRIMARY_COLOR } from '~/components/Common/constants';


export const VideoDetailCol = styled.div`
   padding-top:30px;
   margin-left: 50px; 
   margin-right: 50px; 
   line-height: 1.5;
   font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
   text-align: justify;
   text-justify: newspaper !important;
   font-size: 1rem;

   div {
   &:focus{
      outline:${PRIMARY_COLOR} auto 5px!important;
      box-shadow: none !important;
    }
   }
   
   height: 100% !important;
   overflow: hidden !important;
   
   .row{
      height: auto;
      vertical-align: baseline !important;
        margin: 0 10px 0 10px;
        .col {
          padding: 0 !important;
        }
      .p {
        margin: 0 !important;      
      }
   }   
`;


export const VideoTitleRow = styled(Row)`
   display: flex;
   padding-top: 5%;
   vertical-align: middle;
   p {
    text-align: right;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
    color: slategrey;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;   
   }
   h3 {
   font-size: 1.75rem;
   }
   
   @media(max-width: 400px) {
   .col{
   h3{
   font-size: 1.2rem;
   }
   }
   }
`;

export const NoOutlineVideo = styled(Player)`
    video {
        &:focus{
            outline:${PRIMARY_COLOR} auto 5px!important;
            box-shadow: none !important;
        }
    }
`;

export const CommentsViewArea = styled.div`
overflow: scroll !important;
width: 100%;
height: 70%;
text-align: justify;
text-justify: newspaper !important;

@media (max-width: 450px) {
overflow: scroll !important;
width: 100%;
padding: 0 10px 0 10px;

@media (max-width: 450px) {
h3 {
  font-size: 1.4rem;
}

@media (min-height: 800px) {
height: 75%;
}
}


p{
font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
font-size: 0.8rem;
}
}
`;

