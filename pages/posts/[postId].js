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
    paths,
    fallback: "blocking",
  };
}
