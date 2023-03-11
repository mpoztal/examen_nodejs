const executeQuery = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const executeQueryOne = (sql, arr = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, arr, (err, result) => {
            if (err) reject(err);
            if (result.length === 0) resolve(null);
            resolve(result[0]);
        })
    });
}

const createEntity = async (model, entity) => {
    const { insertId } = await model.create(entity);        
        const newEntity = await model.getById(insertId); 
        return newEntity;
}




module.exports = { executeQuery, createEntity, executeQueryOne }