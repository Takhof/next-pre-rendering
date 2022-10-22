import axios from "axios";
import User from "../components/user.js";

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user}></User>
          </div>
        );
      })}
    </>
  );
}

export default UserList;

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
