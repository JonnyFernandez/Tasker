const app = require('./src/app')
const connectDB = require('./src/db')
require('dotenv').config();
const { PORT } = process.env


connectDB()

app.listen(PORT, () => console.log(`server on port: ${PORT}`));