const express = require('express');
const bodyParser = require('body-parser');
const loader = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const app = express();
app.get('/', (req,res) => {
  res.send('HOME PAGE')
})
app.listen(PORT,()=>console.log(`Server is running on PORT :${PORT}`))