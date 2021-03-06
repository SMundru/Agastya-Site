import React from 'react';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { CommentMetaData, CommentText, CommentWrapper } from './styled';

const Comment = ({ comment }) => (
  <CommentWrapper>
    <CommentMetaData>
      <Row>
        <Col>
          {comment.Commenter}
        </Col>
        <Col>
          {comment.CommentedTime}
        </Col>
      </Row>
    </CommentMetaData>
    <CommentText>
      {comment.Comment}
    </CommentText>
  </CommentWrapper>
);

export default Comment;
