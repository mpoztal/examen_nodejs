const router = require('express').Router();
const { checkSchema, validationResult } = require('express-validator');


const utils = require('../../helpers/utils');
const Agent = require('../../models/agents.model');

const { checkValidationErrors } = require('../../helpers/middlewares');
const createValidator = require('../../validators/createGeneral.validator');


router.get('/', async (req, res) => {
    try {
        const result = await Agent.getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});

router.post('/',
    checkSchema(createValidator), 
    checkValidationErrors,  

    async (req, res) => {
    try {               
        const newAgent = await utils.createEntity(Agent, req.body);
        res.status(201).json(newAgent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:agentId', (req, res) => {
    const { agentId } = req.params;

    Agent.update(agentId, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});

router.delete('/:agentId', (req, res) => {
    const { agentId } = req.params;

    Agent.deleteById(agentId)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});
    


module.exports = router;