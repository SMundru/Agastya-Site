import React, {useEffect, useState} from "react";
import VideoFrame from "../components/VideoFrame";
import {Col, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import {PREFIX} from "../constants";
import Layout from "../components/layout";
import PostsWrapper from "../components/Common/PostsWrapper";
import Pagination from "../components/Common/Pagination";
import {PostContent} from "../components/Post/styled";

const Year = ({location}) => {
    const folder = location.state.folder;
    console.log(folder);
    const [objects, setObjects] = useState([])
    useEffect(() => {
        fetch(`https://rv673fuek6.execute-api.eu-west-2.amazonaws.com/Dev/?bucket=agastya-encoded&folder=${folder}`)
            .then(response => response.json())
            .then(resultData => {
                console.log(resultData);
                setObjects(resultData.Contents.map((c) => c.Key))
            }) // set data for the number of stars
    }, []);

    console.log(objects);

    return (
        <Layout location={location}>
            <Helmet>
                <title>
                    {`${PREFIX}${folder.toUpperCase()}`}
                </title>
                <meta name="og:title" content={`${PREFIX}${folder.toUpperCase()}`}/>
            </Helmet>
            <PostsWrapper>
                <Row>
                    {objects.map((key, i) => {
                            if (key === typeof 'undefined' || key === folder) {
                                return null;
                            }
                            return (
                                <Col key={i}>
                                    <PostContent>
                                        <VideoFrame url={`https://d27s0pq0m2kt4k.cloudfront.net/${key}`} title={key}/>
                                    </PostContent>
                                </Col>
                            );
                    })}
                </Row>
            </PostsWrapper>
            <Pagination postCount={1} location={location}/>
        </Layout>
    )
};

export default Year;
