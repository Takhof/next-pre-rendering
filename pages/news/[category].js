import axios from "axios";

function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id}
              {article.title}
            </h2>
            <p>{article.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await axios.get(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.data;

  console.log(data);

  return {
    props: {
      articles: data,
      category,
    },
  };
}
