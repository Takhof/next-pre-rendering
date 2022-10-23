import Link from "next/link";

function Post({ post }) {
  return (
    <div>
      <p>
        <Link href={`posts/${post.id}`} passHref>
          <a>
            {post.id}
            {post.title}
          </a>
        </Link>
      </p>
      <hr />
    </div>
  );
}

export default Post;
