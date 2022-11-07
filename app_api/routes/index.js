const express = require('express');
const router = express.Router();
const ctrlSets = require('../controllers/sets');

// Getting, deleting, and updating existing set
router
  .route('/sets/:setid')
  .get(ctrlSets.setReadOne)
  .delete(ctrlSets.setDeleteOne)
  .put(ctrlSets.setUpdateOne)

// Getting all existing sets and creating a set
router
  .route('/sets')
  .get(ctrlSets.setsList)
  .post(ctrlSets.setCreate);

module.exports = router;