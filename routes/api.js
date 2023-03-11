const router = require('express').Router();

const apiClientsRouter = require('./api/clients');
const apiAgentsRouter = require('./api/agents');
const apiTravelsRouter = require('./api/travels'); 




router.use('/clients', apiClientsRouter);
router.use('/agents', apiAgentsRouter);
router.use('/travels', apiTravelsRouter);




module.exports = router;