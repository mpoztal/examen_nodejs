const router = require('express').Router();
const Agent = require('../models/agents.model');



router.get('/', async (req, res) => {
    const agents = await Agent.getAll();       
    res.render('agents/index', {
        agents 
    });   
});

router.get('/new', async (req, res) => {          
    res.render('agents/form');  
});

router.get('/edit/:agentId', async (req, res) => {
    const { agentId } = req.params;
    const agent = await Agent.getById(agentId);
    console.log(agent)
    res.render('agents/formUpdate', {agent});
});
router.get('/delete/:agentId', async (req, res) => {
    const { agentId } = req.params;
    await Agent.deleteById(agentId);
    res.redirect('/agents');
});
router.get('/:agentId', async (req, res) => {
    const { agentId } = req.params;
    const agent = await Agent.getById(agentId);  
    res.render('agents/view', { agent });
});
router.post('/create', async (req, res) => {
    await Agent.create(req.body);
    res.redirect('/agents');
});

router.post('/update', async (req, res) => {
    await Agent.update(req.body.agentId, req.body);
    res.redirect('/agents');    
});







module.exports = router;