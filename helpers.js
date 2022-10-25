const fetcher = async (category) => {
  const response = await fetch(`http://localhost:4000/${category}`);
  const data = await response.json();
  return data;
};

export default fetcher;
