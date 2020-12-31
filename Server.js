const express = require('express');
const bodyParser = require('body-parser');
const loader = require('morgan');
const cors = require('cors');
const booksRoutes  = require('./routes/books')
const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))


app.use('/library',booksRoutes)
app.listen(PORT,()=>console.log(`Server is running on PORT :${PORT}`))