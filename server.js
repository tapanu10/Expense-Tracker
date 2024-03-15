const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const incomeRoutes=require('./routes/transactionRoutes');
const db = require('./db');
const cors=require('cors')
//config env
dotenv.config();

//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/',incomeRoutes);


//rest api
app.get('/', (req, res) => {
    res.send('Welcome');
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
