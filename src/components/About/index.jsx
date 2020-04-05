import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import dompurify from 'dompurify';
import Clearfix from '~/components/Common/Clearfix';
import { PREFIX, AUTHOR, EMAIL, FACEBOOK_ID, YOUTUBE_ID, INSTAGRAM_ID } from '~/constants';
import * as profileUrl from '~/resources/images/orange.png';
import { Wrapper, BasicInformation, SocialInformation, MDInformation } from './styled';
import PageWrapper from '../Common/Wrapper';

const About = ({
  data: {
    about: {
      html,
    },
  },
}) => {
  const $mdWrapper = useRef(null);

  useEffect(() => {
    const anchors = [...new Set($mdWrapper.current.getElementsByTagName('a'))];

    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');

      if (href.startsWith('http')) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer noopener');
      }
    });
  }, []);

  return (
    <PageWrapper>
      <Wrapper>
        <Clearfix>
          <Helmet>
            <title>
              {`${PREFIX}ABOUT`}
            </title>
            <meta name="og:title" content={`${PREFIX}ABOUT`} />
          </Helmet>
          <BasicInformation>
            <img
              src={profileUrl.default}
              alt=""
              width="120"
              height="120"
            />
            <h1>
              {AUTHOR}
            </h1>
            <p>
              {EMAIL}
            </p>
          </BasicInformation>
          <SocialInformation>
            {FACEBOOK_ID ? (
              <a
                href={`https://www.facebook.com/${FACEBOOK_ID}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook />
              </a>
            ) : null}
            {YOUTUBE_ID ? (
              <a
                href={`https://www.youtube.com/channel/${YOUTUBE_ID}/`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaYoutube />
              </a>
            ) : null}
            {INSTAGRAM_ID ? (
              <a
                href={`https://www.instagram.com/${INSTAGRAM_ID}/`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram />
              </a>
            ) : null}
          </SocialInformation>
          <MDInformation>
            <div
              ref={$mdWrapper}
              dangerouslySetInnerHTML={{ __html: dompurify.sanitize(html) }}
            />
          </MDInformation>
        </Clearfix>
      </Wrapper>
    </PageWrapper>
  );
};

About.propTypes = {
  data: PropTypes.shape({ about: PropTypes.object }).isRequired,
};

export default About;
