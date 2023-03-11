module.exports = {
    name: {
        exists: true,
        errorMessage: 'El campo name es requerido',
        isLength: {
            options: { min: 3 },
            errorMessage: 'El campo nombre debe tener tamaño mínimo de 3'
        }
    },
    surnames: {
        exists: true,
        errorMessage: 'El campo surnames es requerido',
        isLength: {
            options: { min: 2 },
            errorMessage: 'El campo surnames debe tener tamaño mínimo de 2'
        }
    },
    address: {
        exists: true,
        errorMessage: 'El campo address es requerido',
        isLength: {
            options: { min: 2 },
            errorMessage: 'El campo address debe tener tamaño mínimo de 2'
        }
    },
    email: {
        exists: true,
        errorMessage: 'El campo email es requerido',
        isEmail: {
            bail: true,
            errorMessage: 'Debe tener formato correcto',
        },
    },
    phone: {
        exists: true,
        errorMessage: 'El campo phone es requerido',
        isLength: {
            options: { min: 9 },
            errorMessage: 'El campo phone debe tener tamaño mínimo de 9',       
        },
        isNumeric: true,
        errorMessage: 'Deben ser números' 
    },
}


  
