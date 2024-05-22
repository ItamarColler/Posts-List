import Post from "../components/post/post.interface";

const fetchCommentsPost = async (post: Post) => {
  const commentsResponse = await fetch(
    `https://dummyjson.com/posts/${post.id}/comments`
  );
  const commentsData = await commentsResponse.json();
  return { ...post, comments: commentsData.comments.length };
};
export default fetchCommentsPost;
