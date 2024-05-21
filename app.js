require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(index.html);
    console.log("Server has been started...");
});

app.listen(process.env.PORT);