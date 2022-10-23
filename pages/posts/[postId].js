import axios from "axios";

function Post({ post }) {
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

  const data = await response.data;
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths(slug) {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}
