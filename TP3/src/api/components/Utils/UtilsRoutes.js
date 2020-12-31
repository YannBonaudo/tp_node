const express = require('express');
const UtilsController = require('./UtilsController');

const router = express.Router();

router.route('/ping')

    .get([
        UtilsController.ping
    ])

module.exports = router;