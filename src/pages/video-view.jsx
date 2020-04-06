import React from 'react';
import { ControlBar, Player } from 'video-react';
import { Helmet } from 'react-helmet';
import { Button, Col, Row } from 'react-bootstrap';
import PageWrapper from '../components/Common/Wrapper';
import { VideoDescription } from '../components/VideoFrame/styled';
import { PREFIX } from '../constants';
import Layout from '../components/layout';
import {CommentBox, CommentButton, NoOutlineVideo, VideoDetailCol} from '../components/VideoView/styled';

const VideoView = ({ location }) => {
  let detail;
  let route;
  const { state } = location;
  if (typeof state !== 'undefined' && state !== null && typeof state.detail !== 'undefined') {
    ({ detail } = location.state);
    route = 'test';
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          {`${PREFIX} VIDEOS | ${route}`}
        </title>
        <meta name="og:title" content={`${PREFIX}${route}`} />
      </Helmet>
      <PageWrapper>
        <Row>
          <Col>
            <VideoDetailCol>
              <NoOutlineVideo src={detail.VideoUrl.S} poster={detail.PosterUrl.S} preload="none" playsInline>
                <ControlBar autoHide />
              </NoOutlineVideo>
              <VideoDescription>
                <h3>{detail.DisplayName.S}</h3>
                <p>{detail.Description.S}</p>
              </VideoDescription>
            </VideoDetailCol>
          </Col>
          <Col>
            <VideoDetailCol>
              <CommentBox placeholder="Add a public comment ....." minRows={1} />
              <CommentButton>Comment</CommentButton>
            </VideoDetailCol>
          </Col>
        </Row>
      </PageWrapper>
    </Layout>
  );
};

export default VideoView;
