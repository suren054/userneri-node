const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('mongoose');
const cors = require("cors");
const dotenv = require('dotenv');
const UserRoute = require("./cloud/routes/user-route");
const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors())
app.use('/user', UserRoute);



const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('server run')
        app.listen(PORT)
    })
    .catch((error) => console.log(error.message));