import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next JS Pre-rendering</h1>
      <Link href="/users">
        <a>User Page</a>
      </Link>
    </>
  );
}

export default Home;
