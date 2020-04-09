import React from 'react';
import { ControlBar, Player } from 'video-react';
import { FaEye } from 'react-icons/all';
import { MobileVideo, MobileVideoTitle } from './styled';
import { CommentsViewArea } from '../VideoView/styled';
import Comment from '../Comment';
import PageWrapper from '../Common/Wrapper';
import CommentInput from '../CommentInput';

const MobileVideoView = ({ detail }) => (
  <>
    <PageWrapper>
      <MobileVideo>
        <Player src={detail.VideoUrl.S} poster={detail.PosterUrl.S} preload="none" playsInline>
          <ControlBar autoHide />
        </Player>
      </MobileVideo>
      <CommentsViewArea>
        <MobileVideoTitle>
          <h3>{detail.DisplayName.S}</h3>
          <p>
            <FaEye />
            {detail.Views.N}
          </p>
        </MobileVideoTitle>
        <p>
          Module parse failed: Assigning to rvalue (1:2). You may need an appropriate loader to handle this file type,
          currently no loaders are configured to process
        </p>
        <CommentInput />
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
    </PageWrapper>
  </>
);

export default MobileVideoView;
