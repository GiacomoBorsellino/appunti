/** Configurazione */
// const { application } = require('express');
const express = require('express');
const router = express.Router();

/** Middleware usato per recepire la request del post */
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

/** Importo dei controllers */
const controller = require("../controllers/documents.controller");

/** Middleware di autenticazione: controlla se ad ogni richiesta c'è un token di autenticazione allegato */
// const { authJwt } = require("../middleware");

/** GET di tutti i documenti */
router.get('/documents', controller.getDocuments);

// [authJwt.verifyToken],
/** GET di un documento */
// router.get('/api/v1/documents/:id', controller.getDocument);

// /** POST di una documento */
router.post('/documents', controller.postDocument);

// /** PUT di un documento */
router.put('/documents/:id', controller.putDocument);

// /** DELETE singola documento */
router.delete('/documents/:id', controller.deleteDocument);

/** Export dei router in server.js */
module.exports = router;