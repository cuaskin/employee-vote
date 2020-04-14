const routes = (module.exports = require('next-routes')());

routes.add('/', '/').add('profile', '/employee/:id');
