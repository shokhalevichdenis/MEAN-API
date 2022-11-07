const express = require('express');
const router = express.Router();
const ctrlSets = require('../controllers/sets');

// sets
router
  .route('/sets/:setid')
  .get(ctrlSets.setReadOne)
  .delete(ctrlSets.setDeleteOne)
  .put(ctrlSets.setUpdateOne)

router
  .route('/sets')
  .get(ctrlSets.setsList)
  .post(ctrlSets.setCreate);

module.exports = router;