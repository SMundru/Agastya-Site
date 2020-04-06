import React from 'react';
import { ControlBar } from 'video-react';
import { Helmet } from 'react-helmet';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../components/Common/Wrapper';
import { VideoDescription } from '../components/VideoFrame/styled';
import { PREFIX } from '../constants';
import Layout from '../components/layout';
import { CommentButton, CommentInputBox, CommentsViewArea, NoOutlineVideo, VideoDetailCol } from '../components/VideoView/styled';
import Comment from '../components/Comment';

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
              <CommentInputBox placeholder="Add a public comment ....." minRows={1} />
              <CommentButton>Comment</CommentButton>

              <CommentsViewArea>
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
                <Comment comment={{
                  Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' loaders are configured to process',
                  Commenter: 'Sivan Mundru',
                  CommentedTime: '29/03/2020 7:32 am',
                }}
                />
              </CommentsViewArea>
            </VideoDetailCol>
          </Col>
        </Row>
      </PageWrapper>
    </Layout>
  );
};

export default VideoView;
