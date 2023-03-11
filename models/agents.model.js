const { executeQuery, executeQueryOne } = require('../helpers/utils');


const getAll = () => {
    return executeQuery('select * from agents');
};

const create = ({ name, surnames, address, email, phone }) => {
    return executeQuery('insert into agents(name, surnames, address, email, phone) values(?, ?, ?, ?, ?)', [name, surnames, address, email, phone]);
};

const getById = (agentId) => {
    return executeQueryOne('select * from agents where id = ?', [agentId]);
};

const update = (agentId, { name, surnames, address, email, phone }) => {
    return executeQuery('update agents set name = ?, surnames = ?, address = ?, email = ?, phone = ? where id = ?', [name, surnames, address, email, phone, agentId]);
};

const deleteById = (agentId) => {
    return executeQuery('delete from agents where id = ?', [agentId]);
}



module.exports = { getAll, create, getById, update, deleteById };