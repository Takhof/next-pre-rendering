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
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    return {
      props: {
        post: response.data,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const data = await response.data;

  const paths = data.map((post) => {
    return {
      params: { postId: `${post.id}` },
    };
  });

  return {
    paths: [
      {
        params: { postId: "1" },
      },
    ],
    fallback: "blocking",
  };
}
