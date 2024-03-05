import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";
import { useEffect, useState } from "react";

export default function PostList() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const postsData = await client.queries.postConnection();
      const posts = postsData?.data?.postConnection?.edges;
      setPostsList(posts);
    }
    getPosts();
  }, []);
  return (
    <>
      <h1>Posts</h1>
      <div>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              <a>{post.node._sys.filename}</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
