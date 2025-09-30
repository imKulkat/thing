export default async function handler(req, res) {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    res.status(400).json({ error: 'No url provided.' });
    return;
  }
  try {
    const fetchResponse = await fetch(targetUrl);
    const data = await fetchResponse.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: 'Fetch failed', details: error.message });
  }
}
