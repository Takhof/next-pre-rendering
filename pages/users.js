import axios from "axios";

function User({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default User;

export async function getStaticProps() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;

  return {
    props: {
      users: data,
    },
  };
}
