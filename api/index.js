const express = require('express');
const app = express();

app.get('/api/', (req, res) => {
  res.json('Im working');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});