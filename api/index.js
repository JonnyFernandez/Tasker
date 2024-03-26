const app = require('./src/app')
const main = require('./src/db')
require('dotenv').config();
const { PORT } = process.env


main().catch(console.error)

app.listen(PORT, () => console.log(`server on port: ${PORT}`));