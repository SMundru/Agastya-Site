import React from "react";
import {Player} from 'video-react';
import {ImageWrapper, PostContent, Tags} from "../Post/styled";
import {FaTags} from "react-icons/fa";
import {Link} from "gatsby";
import PostWrapper from "../Common/PostWrapper";
import Helmet from "react-helmet/es/Helmet";
import {PREFIX} from "../../constants";
import Bio from "../Bio"


const VideoFrame = ({url, title}) => {

    return <PostWrapper>
        <Helmet>
            <title>
                {`${PREFIX}${title}`}
            </title>
            <meta name="og:title" content={`${PREFIX}${title}`} />
        </Helmet>
        <h1>
            {title}
        </h1>
        <Bio />
        <PostContent>
            <Player>
                <source src={url} />
            </Player>
        </PostContent>
        <div id="disqus_thread" />
        <noscript>
            Please enable JavaScript to view the
            &nbsp;
            <a href="https://disqus.com/?ref_noscript">
                comments powered by Disqus.
            </a>
        </noscript>
    </PostWrapper>
     // return (
        //     <Player>
        //         <source src={url} />
        //     </Player>
        // );
};

export default VideoFrame;
