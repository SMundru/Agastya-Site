import React, { useState } from 'react';
import { CommentButton, CommenterName, CommentInputBox } from './styled';

const CommentInput = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  console.log(name, comment);

  const updateComment = (e) => {
    e.persist();
    setComment(e.target.value);
  };

  const updateName = (e) => {
    console.log(name);
    e.persist();
    setName(e.target.value);
  };


  return (
    <form>
      <CommentInputBox name="comment" value={comment} onChange={updateComment} placeholder="add a public comment ....." minRows={1} />
      <CommenterName placeholder="and your name ......" name="name" aria-label="Name" type="text" value={name} onChange={updateName} />
      <CommentButton>Comment</CommentButton>
    </form>
  );
};


export default CommentInput;
