import axios from "axios";
import Post from "../../components/post.js";

function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Post post={post}></Post>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const data = await response.data;

  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}
