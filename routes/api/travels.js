const router = require('express').Router();
const { checkSchema, validationResult } = require('express-validator');

const utils = require('../../helpers/utils');
const Travel = require('../../models/travels.model');

const { checkValidationErrors } = require('../../helpers/middlewares');
const createEntityValidator = require('../../validators/createEntity.validator');




router.get('/', async (req, res) => {
    try {
        const result = await Travel.getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }

});

router.post('/', 
    checkSchema(createEntityValidator),
    checkValidationErrors, 

    async (req, res) => {
        try {               
            const newTravel = await utils.createEntity(Travel, req.body);
            res.status(201).json(newTravel);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
});

router.put('/:travelId', (req, res) => {
    const { travelId } = req.params;

    Travel.update(travelId, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});

router.delete('/:travelId', (req, res) => {
    const { travelId } = req.params;

    Travel.deleteById(travelId)
        .then((result) => res.json(result))
        .catch((err) => res.json({ error: err.message }));
});
    


module.exports = router;

















