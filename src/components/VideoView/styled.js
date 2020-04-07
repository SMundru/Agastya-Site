import styled from 'styled-components';
import { Player } from 'video-react';
import { Row } from 'react-bootstrap';
import { PRIMARY_COLOR } from '~/components/Common/constants';


export const VideoDetailCol = styled.div`
   padding-top:30px;
   margin-left: 50px; 
   margin-right: 50px; 
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
        margin: 0 !important;
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
`;

