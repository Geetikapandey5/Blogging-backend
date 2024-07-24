const express = require('express');

const router = express.Router();

const tagsController = require('../controllers/tagsControllers');


router.get('/', tagsController.getTags);

module.exports = router;