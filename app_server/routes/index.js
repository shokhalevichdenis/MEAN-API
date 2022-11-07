const express = require('express');
const router = express.Router();

const ctrlOthers = require('../controllers/others');
const ctrlSets = require('../controllers/sets');

// Sets
router.get('/', ctrlSets.homelist);
router.get('/sets/:setid', ctrlSets.set);

router.get('/about', ctrlOthers.about);

module.exports = router;
