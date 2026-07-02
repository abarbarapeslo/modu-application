import { runAgent } from '../../../lib/agent';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const reply = await runAgent(message);
    res.status(200).json({ reply });
  } catch {
    res.status(500).json({ error: 'Failed to process message' });
  }
}
