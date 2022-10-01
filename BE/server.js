const express = require('express');
const createError = require('http-errors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Porta usata dal Front-End
const cors = require("cors");

var corsOptions = {
    origin: `http://localhost:4200`
};

app.use(cors(corsOptions));

/** Chiamata di controllo */
app.get('/', async (req, res, next) => {
    res.send({ message: 'Chiamata di Controllo' });
});

/** Import Routes */
const documentsRouter = require('./routes/documents');
app.use('/api/v1', documentsRouter);

/** Gestione Route non trovata */
app.use((req, res, next) => {
    next({ message: "error" });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 300,
        message: err.message
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Server in ascolto'); })
