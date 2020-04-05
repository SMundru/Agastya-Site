import React from 'react';
import { Link } from 'gatsby';
import poster from './orange.png';
import { ImageWrapper } from './styled';

const VideoFrame = ({ detail }) => (<ImageWrapper><Link to="/video-view" state={{ detail }}><img src={detail.PosterUrl.S} alt={poster} /></Link></ImageWrapper>);


export default VideoFrame;

