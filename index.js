const express = require ('express');
const path = require('path');

const app = express();

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000; //initializing a variable port that checks for the port in the environment variable

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));