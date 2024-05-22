// import { useState } from 'react';
import "./App.css";
import MonitorComponent from "./components/monitor/MonitorComponent";
import { RefreshButton } from "./components/monitor/RefreshButton";
import useFetchPosts from "./hooks/useFetchPosts";
import PostsContainer from "./components/post/postsContainer";

function App() {
  const {
    posts,
    refetch,
    loading,
    totalCount,
    selectedPosts,
    handleSelectPost,
  } = useFetchPosts();
  return (
    <div className="main-page">
      <div className="header">
        <MonitorComponent
          selectedCount={selectedPosts.length}
          totalCount={totalCount}
        />
        <RefreshButton refetch={refetch} />
      </div>
      <PostsContainer
        posts={posts}
        onSelectPost={handleSelectPost}
        selectedPosts={selectedPosts}
        loading={loading}
      />
    </div>
  );
}

export default App;
