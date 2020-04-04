import React, {useContext} from "react";
import VideoFrame from "../components/VideoFrame";
import {Col, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import {PREFIX} from "../constants";
import Layout from "../components/layout";
import PostsWrapper from "../components/Common/PostsWrapper";
import Pagination from "../components/Common/Pagination";
import {PostContent} from "../components/Post/styled";
import {myContext} from "../components/App/AppContext";

const Videos = ({location}) => {
    const {folder, division} = location.state;
    const context = useContext(myContext);
    let videos;

    if (division === 'age') {
        videos = context.yearVideoMap[folder];
    } else if (division === 'category') {
        videos = context.categoryVideoMap[folder];
    }
    console.log(videos);

    return (
        <myContext.Consumer>{
            () =>
            <Layout location={location}>
                <Helmet>
                    <title>
                        {`${PREFIX} VIDEOS | ${folder.toUpperCase()}`}
                    </title>
                    <meta name="og:title" content={`${PREFIX}${folder.toUpperCase()}`}/>
                </Helmet>
                <PostsWrapper>
                    <Row>
                        {videos.map((object, i) => {
                            if (object === typeof 'undefined') {
                                return null;
                            }
                            return (
                                <Col key={i}>
                                    <PostContent>
                                        <VideoFrame detail={object}/>
                                    </PostContent>
                                </Col>
                            );
                        })}
                    </Row>
                </PostsWrapper>
                <Pagination postCount={1} location={location}/>
            </Layout>}
        </myContext.Consumer>)
};

export default Videos;
