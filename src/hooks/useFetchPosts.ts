import { useState, useRef, useCallback, useEffect } from "react";
import Post from "../components/post/post.interface";
import fetchCommentsPost from "../proxy/fetch";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<number>(0);
  const [selectedPosts, setSelectedPosts] = useState<number[]>([]);

  const abortControllerRef = useRef<AbortController | null>(null);

  const sleep = (ms: number | undefined) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  //removes or adds to the array when clicking on input button
  //onPostClick
  const handleSelectPost = (postId: number) => {
    setSelectedPosts((prevSelected) =>
      prevSelected.includes(postId)
        ? prevSelected.filter((id) => id !== postId)
        : [...prevSelected, postId]
    );
  };

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      const response = await fetch("https://dummyjson.com/posts", {
        signal: abortControllerRef.current?.signal,
      });
      const data = await response.json();
      await Promise.allSettled(
        //callback function
        data.posts.map(fetchCommentsPost)
      ).then((responses) => {
        //if a promise is not resolved it will not fail all promises
        setPosts(
          responses
            .map((response, index) =>
              response.status === "fulfilled"
                ? response.value
                : { ...data.posts[index], commments: -1 }
            )
            .filter((value) => value)
        );
      });
      await sleep(refresh == 0 ? 0 : 2500);
      setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Aborted");
        return;
      }
      console.error("Error fetching posts:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [refresh]);

  return {
    posts,
    loading,
    totalCount: posts.length,
    selectedPosts,
    refetch: () => setRefresh((c) => c + 1),
    handleSelectPost,
  };
};

export default useFetchPosts;
