export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.VITE_BLOB_URL);
    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "model/gltf-binary");
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch model" });
  }
}
