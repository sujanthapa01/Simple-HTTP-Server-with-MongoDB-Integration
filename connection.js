const mongoose = require('mongoose');

async function mongooseConnectionToDB(DBurl){
    return mongoose.connect(DBurl)
}

module.exports = mongooseConnectionToDB;
