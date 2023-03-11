const { executeQuery, executeQueryOne } = require('../helpers/utils');


const getAll = () => {
    return executeQuery('select * from travels');
};

const create = ({ destination_country, destination_city, length_of_stay, price }) => {
    return executeQuery('insert into travels(destination_country, destination_city, length_of_stay, price) values(?, ?, ?, ?)', [destination_country, destination_city, length_of_stay, price]);
};

const getById = (travelId) => {
    return executeQueryOne('select * from travels where id = ?', [travelId]);
};

const update = (travelId, { destination_country, destination_city, length_of_stay, price }) => {
    return executeQuery('update travels set destination_country = ?, destination_city = ?, length_of_stay = ?, price = ? where id = ?', [destination_country, destination_city, length_of_stay, price, travelId]);
};

const deleteById = (travelId) => {
    return executeQuery('delete from travels where id = ?', [travelId]);
}




module.exports = { getAll, create, getById, update, deleteById };