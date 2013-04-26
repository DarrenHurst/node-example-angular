
exports.init = function(app){
//services definitions
var data_api = require('./data');

data_api.init(app);
}