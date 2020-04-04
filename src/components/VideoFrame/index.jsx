import React from "react";
import {ControlBar, Player} from 'video-react'
import poster from "./orange.png"
import {VideoDescription} from "./styled";

const VideoFrame = ({detail}) => {
    return (<div><Player src={detail.VideoUrl.S} poster={detail.PosterUrl.S} preload='none' playsInline={true}>
        <ControlBar autoHide={true}/>
    </Player>
    <VideoDescription>
        <h3>{detail.DisplayName.S}</h3>
        <p>{detail.Description.S}</p>
    </VideoDescription></div>)
};


export default VideoFrame

