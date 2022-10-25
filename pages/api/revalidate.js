import { NextApiHandler } from "next";

const handler = async (req, res) => {
  const id = req.query.id;
  console.log(id.category);
  if (!category) return res.status(404).json({ message: "Not Found" });

  try {
    await res.revalidate(`/news/${category}`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
