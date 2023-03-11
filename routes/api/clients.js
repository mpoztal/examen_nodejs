const router = require('express').Router();
const { checkSchema, validationResult } = require('express-validator');

const utils = require('../../helpers/utils');
const Client = require('../../models/clients.model');

const { checkValidationErrors } = require('../../helpers/middlewares');
const createValidator = require('../../validators/createGeneral.validator');
const clientValidator = require('../../validators/client.validator');



router.get('/', async (req, res) => {
    try {
        const result = await Client.getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
    
});

router.post('/', 
    checkSchema(createValidator),
    checkSchema(clientValidator), 
    checkValidationErrors, 
    async (req, res) => {
        try {                       
            const newClient = await utils.createEntity(Client, req.body);
            res.status(201).json(newClient);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
});

router.put('/:clientId', (req, res) => {
    const { clientId } = req.params;

    Client.update(clientId, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});

router.delete('/:clientId', (req, res) => {
    const { clientId } = req.params;

    Client.deleteById(clientId)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});





module.exports = router;