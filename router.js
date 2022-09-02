const express = require('express');
const containerController = require('./controller/containerController');

const router = express.Router();

// fetching recipies data

router.get('/getContainer', containerController.getContainer);



module.exports = router;