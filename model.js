var mongoose = require('mongoose');

// Mongoose Connection
mongoose.connect('mongodb://localhost/nsa');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
 // mongooooooooooooseDB
});

// Secrets
var secretSchema = mongoose.Schema({
    name: String,
    address: String
});
secretSchema.methods.share = function () {
  // What methods will we need back here?
};

// Exports
exports.Secret = mongoose.model('Secret', secretSchema);
