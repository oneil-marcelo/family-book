import React from "react";

import PostHeader from ".././PostHeader";

const Post = props => {
  const { avatar, author, time, description } = props.post;

  return (
    <li>
      <PostHeader avatar={avatar} author={author} time={time} />
      <p>{description}</p>
    </li>
  );
};

export default Post;
