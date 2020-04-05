import React from "react";
import poster from "./orange.png"
import {ImageWrapper} from "./styled";
import {Link} from 'gatsby'

const VideoFrame = ({detail}) => {
    return (<ImageWrapper><Link to='/video-view' state={{ detail }}><img src={detail.PosterUrl.S} alt={poster}/></Link></ImageWrapper>)
};


export default VideoFrame

