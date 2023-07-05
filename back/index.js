const { PORT } = require('./utils/config');
const express = require('express');
require('./db/mongo');
const cors = require('cors');

const mascotaRouter = require('./routes/mascotasRouter');
const userRouter = require('./routes/userRouter');
const { handlerError, handlerNotFound } = require('./middlewares/handleRerrors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/mascota', mascotaRouter);
app.use('/api/user', userRouter);

app.use(handlerNotFound);
app.use(handlerError);

app.listen(PORT, () => {
    console.log(`app corriendo en el puerto: ${PORT}!`);
});