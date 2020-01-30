//Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Santa:christmas@santacluster-membv.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;