module.exports = {
    dni: {
        exists: true,
        errorMessage: 'El campo dni es requerido',
        isLength: {
            options: { min: 9 },
            errorMessage: 'El campo nombre debe tener tamaño mínimo de 9'
        }
    },
    postal_code: {
        isLength: {
            options: { min: 4 },
            errorMessage: 'El campo postal_code debe tener tamaño mínimo de 4'
        },
    },
    city: {
        exists: true,
        errorMessage: 'El campo city es requerido',      
    },



}