export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, age } = req.body;

    // For now, just return the submitted data
    res.status(200).json({
      message: 'User registered successfully!',
      data: { name, email, age }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
