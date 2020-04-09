import React, {useEffect, useState} from 'react';
import {ControlBar} from 'video-react';
import {Helmet} from 'react-helmet';
import {Col, Row} from 'react-bootstrap';
import {FaEye} from 'react-icons/all';
import PropTypes from 'prop-types';
import PageWrapper from '../components/Common/Wrapper';
import {PREFIX} from '../constants';
import Layout from '../components/layout';
import {CommentsViewArea, NoOutlineVideo, VideoDetailCol} from '../components/VideoView/styled';
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput';
import MobileVideoView from '../components/MobileVideoView';
import {MobileVideoTitle} from '../components/MobileVideoView/styled';

const VideoView = ({location}) => {
  let detail;
  let route;
  const {state} = location;
  if (typeof state !== 'undefined' && state !== null && typeof state.detail !== 'undefined') {
    ({detail} = location.state);
    route = 'test';
  }

  let [width, setWidth] = [];
  if (typeof window !== 'undefined') {
    [width, setWidth] = useState(window.innerWidth);
  }

    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    return typeof detail !== 'undefined' ? (
        <Layout location={location}>
          <Helmet>
            <title>
              {`${PREFIX} VIDEOS | ${route}`}
            </title>
            <meta name="og:title" content={`${PREFIX}${route}`}/>
          </Helmet>
          {width <= 500 ? (<MobileVideoView detail={detail}/>) : (
              <PageWrapper>
                <Row>
                  <Col>
                    <VideoDetailCol>
                      <NoOutlineVideo src={detail.VideoUrl.S} poster={detail.PosterUrl.S} preload="none" playsInline>
                        <ControlBar autoHide/>
                      </NoOutlineVideo>
                      <MobileVideoTitle>
                        <h3>{detail.DisplayName.S}</h3>
                        <p>
                          <FaEye/>
                          {detail.Views.N}
                        </p>
                      </MobileVideoTitle>
                      <Row>
                        <p>
                          Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type,
                          currently no loaders are configured to process
                        </p>
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
          )}

        </Layout>
    ) : null;
};

VideoView.propTypes = {
  location: PropTypes.shape({state: PropTypes.object}).isRequired,
};

export default VideoView;
