export default async function handler(req, res) {
  try {
    console.log("Revalidating");
    await res.revalidate("/feature/isg/challenge3");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
