import React from "react";

const PostHeader = ({ avatar, author, time }) => {
  return (
    <div className="header-post">
      <img src={avatar} alt={author} />
      <div>
        <h2>{author}</h2>
        <span>há {time}</span>
      </div>
    </div>
  );
};

export default PostHeader;
