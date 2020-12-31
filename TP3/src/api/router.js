const config = require('../config/env.config');

const UtilsRoutes = require('./components/Utils/UtilsRoutes');
const UserRoutes = require('./components/User/UserRoutes');

const router = (app) => {
    app.use(config.root_api, UtilsRoutes);
    app.use(config.root_api, UserRoutes);
    app.use((req, res) => {
        res.status(404).json({ error: 'Not Found' });
    });
};

module.exports = router;