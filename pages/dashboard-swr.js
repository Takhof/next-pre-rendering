import useSwr from "swr";
import fetcher from "../helpers";

function DashboardSWR() {
  const { data, error } = useSwr("dashboard", fetcher);

  if (error) return "An error has occured";
  if (!data) return "Loading";

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  );
}

export default DashboardSWR;
