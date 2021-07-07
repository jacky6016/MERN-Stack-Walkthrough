// imported modules
const express = require('express');
const cors = require('cors');

require('dotenv').config();

// the app instance
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// start the server on port
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});