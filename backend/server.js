const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/globe-data', (req, res) => {
    fs.readFile('../extraction/data.json', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

