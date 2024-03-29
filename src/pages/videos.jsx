import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import VideoFrame from '../components/VideoFrame';
import { PREFIX } from '../constants';
import Layout from '../components/layout';
import Pagination from '../components/Common/Pagination';
import { myContext } from '../components/App/AppContext';
import Wrapper from '../components/Common/Wrapper';
import { PostContent, VideosRow } from '../components/Videos/styled';

const Videos = ({ location }) => {
  let folder; let division; let route;
  const { state } = location;
  if (typeof state !== 'undefined' && state !== null && typeof state.folder !== 'undefined' && typeof state.division !== 'undefined') {
    ({ folder, division } = location.state);
    route = `${folder.toUpperCase()}`;
  }
  const context = useContext(myContext);

  let videos = [];

  if (typeof context !== 'undefined') {
    if (division === 'age') {
      videos = context.yearVideoMap[folder];
    } else if (division === 'category') {
      videos = context.categoryVideoMap[folder];
    }
  }

  useEffect(() => {
    if (typeof videos === 'undefined' || videos.length === 0) {
      return navigate('/');
    } return () => {};
  });

  return (
    <myContext.Consumer>
      {
        () => (
          <Layout location={location}>
            <Helmet>
              <title>
                {`${PREFIX} VIDEOS | ${route}`}
              </title>
              <meta name="og:title" content={`${PREFIX}${route}`} />
            </Helmet>
            <Wrapper>
              <VideosRow>
                {typeof videos !== 'undefined' && videos.map((object) => {
                  if (typeof object === 'undefined') {
                    return null;
                  }
                  return (
                    <PostContent>
                      <VideoFrame detail={object} />
                    </PostContent>
                  );
                })}
              </VideosRow>
            </Wrapper>
          </Layout>
        )
      }
    </myContext.Consumer>
  );
};

Videos.propTypes = {
  location: PropTypes.shape({ state: PropTypes.object }).isRequired,
};

export default Videos;
