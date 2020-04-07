import React from 'react';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import { TITLE } from '~/constants';
import { Title } from './styled';

const Home = () => (
  <>
    <Helmet>
      <title>
        {TITLE}
      </title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <Wrapper isHome>
      <Title>
        I'm Agastya
      </Title>
    </Wrapper>
  </>
);

export default Home;
