import React from 'react';
import {ControlBar} from 'video-react';
import {Helmet} from 'react-helmet';
import {Col, Row} from 'react-bootstrap';
import PageWrapper from '../components/Common/Wrapper';
import {PREFIX} from '../constants';
import Layout from '../components/layout';
import {CommentsViewArea, NoOutlineVideo, VideoDetailCol, VideoTitleRow, VideoViews} from '../components/VideoView/styled';
import Comment from '../components/Comment';
import CommentInput from "../components/CommentInput";
import {FaEye} from "react-icons/all";

const VideoView = ({location}) => {
  let detail;
  let route;
  const {state} = location;
  if (typeof state !== 'undefined' && state !== null && typeof state.detail !== 'undefined') {
    ({detail} = location.state);
    route = 'test';
  }

  return (
      <Layout location={location}>
        <Helmet>
          <title>
            {`${PREFIX} VIDEOS | ${route}`}
          </title>
          <meta name="og:title" content={`${PREFIX}${route}`}/>
        </Helmet>
        <PageWrapper>
          <Row>
            <Col>
              <VideoDetailCol>
                <NoOutlineVideo src={detail.VideoUrl.S} poster={detail.PosterUrl.S} preload="none" playsInline>
                  <ControlBar autoHide/>
                </NoOutlineVideo>
                <VideoTitleRow>
                  <Col><h3>{detail.DisplayName.S}</h3>
                  </Col>
                  <Col><p><FaEye/>{detail.Views.N}</p></Col>
                </VideoTitleRow>
                <Row>
                  <p>Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no loaders are configured to process</p>
                </Row>
              </VideoDetailCol>
            </Col>
            <Col>
              <VideoDetailCol>
                <CommentInput/>
                <CommentsViewArea>
                  <Comment comment={{
                    Comment: 'Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type, currently no'
                        + ' are configured to process',
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
                    Comment: 'Test',
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
