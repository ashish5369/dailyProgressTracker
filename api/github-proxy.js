// Deploy this to Vercel - it will act as a secure proxy for GitHub API
// Store GITHUB_TOKEN in Vercel environment variables

export default async function handler(req, res) {
  // Enable CORS for your GitHub Pages site
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  
  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });
  }

  const { owner, repo, file } = req.query;
  
  if (!owner || !repo || !file) {
    return res.status(400).json({ error: 'Missing required parameters: owner, repo, file' });
  }
  
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${file}`;

  try {
    if (req.method === 'GET') {
      const response = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${GITHUB_TOKEN}`,
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });
      const data = await response.json();
      return res.status(response.status).json(data);
    }
    
    if (req.method === 'POST' || req.method === 'PUT') {
      const body = req.body;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${GITHUB_TOKEN}`,
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return res.status(response.status).json(data);
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
