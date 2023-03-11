const router = require('express').Router();
const Client = require('../models/clients.model');

router.get('/', async (req, res) => {
    const clients = await Client.getAll();       
    res.render('clients/index', {
        clients
    });
  
});
router.get('/new', async (req, res) => {          
    res.render('clients/form');  
});

router.get('/edit/:clientId', async (req, res) => {
    const { clientId } = req.params;
    const client = await Client.getById(clientId);
    res.render('clients/formUpdate', {client});
});
router.get('/delete/:clientId', async (req, res) => {
    const { clientId } = req.params;
    await Client.deleteById(clientId);
    res.redirect('/clients');
});
router.get('/:clientId', async (req, res) => {
    const { clientId } = req.params;
    const client = await Client.getById(clientId);  
    res.render('clients/view', { client });
});
router.post('/create', async (req, res) => {
    await Client.create(req.body);
    res.redirect('/clients');
});

router.post('/update', async (req, res) => {
    await Client.update(req.body.clientId, req.body);
    res.redirect('/clients');    
});



module.exports = router;