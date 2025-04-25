const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/calc', async (req, res) => {
  try {
    const response = await fetch('http://api.cdek.ru/calculator/calculate_price_by_json.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const result = await response.json();
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));