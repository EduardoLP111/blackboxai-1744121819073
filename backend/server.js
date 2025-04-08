const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route for business registration
app.post('/api/register', (req, res) => {
    const { businessName, ownerName } = req.body;
    // Here you would handle the registration logic
    res.status(201).json({ message: 'Business registered successfully', businessName, ownerName });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
