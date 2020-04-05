import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import VideoFrame from '../components/VideoFrame';
import { PREFIX } from '../constants';
import Layout from '../components/layout';
import PostsWrapper from '../components/Common/PostsWrapper';
import Pagination from '../components/Common/Pagination';
import { PostContent } from '../components/Post/styled';
import { myContext } from '../components/App/AppContext';

const Videos = ({ location }) => {
  let folder; let division; let route;
  if (typeof location !== 'undefined' && typeof location.state !== 'undefined') {
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
    } return null;
  });

  return (
    <myContext.Consumer>
      <Layout location={location}>
        <Helmet>
          <title>
            {`${PREFIX} VIDEOS | ${route}`}
          </title>
          <meta name="og:title" content={`${PREFIX}${route}`} />
        </Helmet>
        <PostsWrapper>
          <Row>
            {typeof videos !== 'undefined' && videos.map((object) => {
              if (typeof object === 'undefined') {
                return null;
              }
              return (
                <Col key={object.S3Name.S}>
                  <PostContent>
                    <VideoFrame detail={object} />
                  </PostContent>
                </Col>
              );
            })}
          </Row>
        </PostsWrapper>
        <Pagination postCount={1} location={location} />
      </Layout>
    </myContext.Consumer>
  );
};

Videos.propTypes = {
  location: PropTypes.shape({ state: PropTypes.object }).isRequired,
};

export default Videos;
