const router = require('express').Router();
const Travel = require('../models/travels.model');


router.get('/', async (req, res) => {
    const travels = await Travel.getAll();       
    res.render('travels/index', {
        travels 
    });   
});

router.get('/new', async (req, res) => {          
    res.render('travels/form');  
});

router.get('/edit/:travelId', async (req, res) => {
    const { travelId } = req.params;
    const travel = await Travel.getById(travelId);
    res.render('travels/formUpdate', {travel});
});
router.get('/delete/:travelId', async (req, res) => {
    const { travelId } = req.params;
    await Travel.deleteById(travelId);
    res.redirect('/travels');
});
router.get('/:travelId', async (req, res) => {
    const { travelId } = req.params;
    const travel = await Travel.getById(travelId);  
    res.render('travels/view', { travel });
});
router.post('/create', async (req, res) => {
    await Travel.create(req.body);
    res.redirect('/travels');
});

router.post('/update', async (req, res) => {
    console.log(req.body)
    await Travel.update(req.body.travelId, req.body);
    res.redirect('/travels');    
});





module.exports = router;