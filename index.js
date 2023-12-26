const app = require('./src/app')
const connectDB = require('./src/db')
const PORT = 3001


connectDB()

app.listen(3001, () => console.log(`server on port: ${PORT}`));