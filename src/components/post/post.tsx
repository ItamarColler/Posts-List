import React from "react";
import Post from "./post.interface";
import "./post.css";

const PostComponent: React.FC<Post> = ({ title, totalComments }: Post) => {
  //   console.log(title, totalComments);
  return (
    <div className="post-info">
      <div className="title" title={title}>
        {title}
      </div>
      <div className="comment">Comments: {totalComments}</div>
    </div>
  );
};
export default PostComponent;
