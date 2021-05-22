const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req,res) => {
    const start = "Front-end and backend connected";

    res.json(start);
})

app.listen(port, () => console.log(`Server is running on port ${port}`));