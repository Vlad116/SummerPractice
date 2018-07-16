const loginRoutes = require('./login_routes');
const registrationRoutes = require('./registration_routes');
const addProductRoutes = require('./addProduct_routes');

module.exports = function (app, fs) {
    loginRoutes(app, fs);
};

module.exports = function (app, fs) {
    registrationRoutes(app, fs);
};

module.exports = function (app, fs) {
    addProductRoutes(app, fs);
};
