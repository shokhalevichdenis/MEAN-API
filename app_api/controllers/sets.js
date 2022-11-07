const mongoose = require('mongoose');
const Set = mongoose.model('Set');

// Read One Set
const setReadOne = (req, res) => {
  Set
    .findById(req.params.setid)
    .exec((err, set) => {
      if (!set) {
        return res
          .status(404)
          .json({"message": "set not found"});
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else {
        return res
          .status(200)
          .json(set);
      }
    });
};

// Read List of Sets
const setsList = (req, res) => {
  Set
    .find({},{ "_id": 1, "title": 1, "subTitle": 1 })
    .exec((err, set) => {
      if (!set) {
        return res
          .status(404)
          .json({"message": "set not found"});
      } else if (err) {
        return res
          .status(404)
          .json(err);
      } else {
        return res
          .status(200)
          .json(set);
      }
    });
};

// Delete One Set
const setDeleteOne = (req, res) => {
  const {setid} = req.params;
  if (setid) {
    Set
      .findByIdAndRemove(setid)
      .exec((err, set) => {
          if (err) {
            return res
              .status(404)
              .json(err);
          }
          res
            .status(204)
            .json(null);
        }
      );
  } else {
    res
      .status(404)
      .json({
        "message": "No Set"
      });
  }
};

// Update One Set
const setUpdateOne = (req, res) => {
  if (!req.params.setid) {
    return res
      .status(404)
      .json({
        "message": "Not found, setid is required"
      });
  }
  Set
    .findById(req.params.setid)
    .exec((err, set) => {
        if (!set) {
          return res
            .status(404)
            .json({
              "message": "setid not found"
            });
        } else if (err) {
          return res
            .status(400)
            .json(err);
        }
        set.title = req.body.title;
        set.subTitle = req.body.subTitle;
        set.questions = [{
          qTitle: req.body.qTitle,
          qDefinition: req.body.qDefinition
        }];
        set.save((err, set) => {
          if (err) {
            res
              .status(404)
              .json(err);
          } else {
            res
              .status(200)
              .json(set);
          }
        });
      }
    );
};

// Create One Set
const setCreate = (req, res) => {
  Set.create({
      title: req.body.title,
      subTitle: req.body.subTitle,
      questions: [
        {
          qTitle: req.body.qTitle,
          qDefinition: req.body.qDefinition
        }
      ]
    },
    (err, set) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        res
          .status(201)
          .json(set);
      }
    }
    );
};

module.exports = {
  setReadOne,
  setDeleteOne,
  setUpdateOne,
  setCreate,
  setsList
};