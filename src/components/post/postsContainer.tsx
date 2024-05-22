import React from "react";
import Post from "./post.interface";
import PostComponent from "./post";
import "./postsContainer.css";

interface PostsContainerProps {
  posts: Post[];
  onSelectPost: (postId: number) => void;
  selectedPosts: number[];
  loading: boolean;
}

const PostsContainer: React.FC<PostsContainerProps> = ({
  posts,
  onSelectPost,
  selectedPosts,
  loading,
}) => {
  //to get reloading state
  if (loading) {
    return (
      <div className="loading">
        <div className="bounce"></div>
        <div className="bounce"></div>
        <div className="bounce"></div>
      </div>
    );
  }
  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <div className="post-wrapper">
            <input
              className="selected-button purple-text"
              type="checkbox"
              checked={selectedPosts.includes(post.id)}
              onChange={() => onSelectPost(post.id)}
            />
            <PostComponent
              id={post.id}
              title={post.title}
              totalComments={post.comments}
              comments={0}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsContainer;
