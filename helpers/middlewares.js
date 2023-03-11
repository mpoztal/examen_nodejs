const { validationResult } = require('express-validator');


const checkValidationErrors = (req, res, next) => {
    // Comprobar los errores de la validación
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.mapped());
    }
    next();

};






module.exports = { checkValidationErrors };