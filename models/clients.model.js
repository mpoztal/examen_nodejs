const { executeQuery, executeQueryOne } = require('../helpers/utils');


const getAll = () => {
    return executeQuery('select * from clients');
};

const create = ({ name, surnames, address, email, dni, phone, postal_code, city }) => {
    return executeQuery('insert into clients(name, surnames, address, email, dni, phone, postal_code, city) values(?, ?, ?, ?, ?, ?, ?, ?)', [name, surnames, address, email, dni, phone, postal_code, city]);
};

const getById = (clientId) => {
    return executeQueryOne('select * from clients where id = ?', [clientId]);
};

const update = (clientId, { name, surnames, address, email, dni, phone, postal_code, city }) => {
    return executeQuery('update clients set name = ?, surnames = ?, address = ?, email = ?, dni = ?, phone = ?, postal_code = ?, city = ? where id = ?', [name, surnames, address, email, dni, phone, postal_code, city, clientId]);
};

const deleteById = (clientId) => {
    return executeQuery('delete from clients where id = ?', [clientId]);
}




module.exports = { getAll, create, getById, update, deleteById };