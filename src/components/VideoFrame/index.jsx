import React from "react";
import {ControlBar, Player} from 'video-react'
import poster from "./orange.png"
import {VideoDescription} from "./styled";

const VideoFrame = ({url, title}) => {
    return (<div><Player src={url} poster={poster} preload='none' playsInline={true}>
        <ControlBar autoHide={true}/>
    </Player>
    <VideoDescription>
        <blockquote>{title}</blockquote>
    </VideoDescription></div>)
};


export default VideoFrame

