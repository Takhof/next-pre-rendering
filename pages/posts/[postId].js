import axios from "axios";
import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  if (response.data.id === 2) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: response.data,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const data = await response.data;

  const paths = data.map((post) => {
    return {
      params: { postId: "1" },
    };
  });

  return {
    paths: [],
    fallback: true,
  };
}
