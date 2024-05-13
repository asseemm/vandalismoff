// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Разрешаем CORS для всех доменов

app.get('/instagram-posts', async (req, res) => {
    try {
        const username = 'your_instagram_username';
        const response = await axios.get(`https://instagram.com/${username}`);
        // Обработка данных
        res.json({ data: 'response data' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Не удалось получить данные' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
