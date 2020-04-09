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
padding: 10px 0 0 0; 
align-items: baseline;
text-align: justify;
justify-content: space-between;


@media(min-width: 1000px) {
  padding: 10px 10px 10px 10px; 
}

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
