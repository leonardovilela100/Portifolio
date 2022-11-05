const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static('./'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})