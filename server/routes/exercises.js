const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise.js');
const ensureAuthenticated = require('../ensureAuthenticated.js');

router.get('/singleExercise', ensureAuthenticated, (req, res) => {
  Exercise.find(
    {
      name: req.body.exerciseName,
    },
    async (err, data) => {
      try {
        if (err) throw err;
        if (!data) {
          res.status(400).json({ msg: 'No exercise found' });
        }
        res.status(201).json({ msg: 'Exercise found', exercise: data });
      } catch (err) {
        return res.status(400).json({ msg: 'Something went wrong: ', err });
      }
    },
  );
});

router.get('/allExercises', ensureAuthenticated, (req, res) => {
  Exercise.find({}, async (err, data) => {
    try {
      if (err) throw err;
      if (!data) {
        res.status(400).json({ msg: 'No exercises found' });
      }
      res.status(201).json({ msg: 'All exercises', exercises: data });
    } catch (err) {
      return res.status(400).json({ msg: 'Something went wrong: ', err });
    }
  });
});

router.get('/exercisesByType', ensureAuthenticated, (req, res) => {
  Exercise.find(
    {
      type: req.body.exerciseType,
    },
    async (err, data) => {
      try {
        if (err) throw err;
        if (!data) {
          res.status(400).json({ msg: 'No exercise found' });
        }
        res.status(201).json({ msg: 'Exercises found', exercise: data });
      } catch (err) {
        return res.status(400).json({ msg: 'Something went wrong: ', err });
      }
    },
  );
});

router.post('/newExercise', (req, res) => {
  Exercise.findOne({ name: req.body.name }, async (err, doc) => {
    try {
      if (err) {
        return res
          .status(400)
          .json({ msg: 'Sorry something went wrong: ', err });
      }
      if (doc) return res.status(400).json({ msg: 'Exercise Already Exists' });

      const newExercise = new Exercise({
        name: req.body.name,
        description: req.body.description ? req.body.description : '',
        type: req.body.type,
      });
      await newExercise.save();
      res.status(201).json({ msg: 'Exercise Created' });
    } catch (error) {
      return res.status(400).json({
        msg: error.errors?.name?.message
          ? error.errors.name.message
          : 'incomplete input',
      });
    }
  });
});

router.patch('/updateExercise', ensureAuthenticated, (req, res) => {
  Exercise.findOneAndUpdate(
    {
      name: req.body.exerciseId,
    },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
      },
    },
    { useFindAndModify: false },
    async (err, data) => {
      try {
        if (err) throw err;
        if (!data) {
          res.status(400).json({ msg: 'No exercise found' });
        }
        res.status(201).json({ msg: 'Exercise deleted' });
      } catch (err) {
        return res.status(400).json({ msg: 'Something went wrong: ', err });
      }
    },
  );
});

router.put('/exerciseInstance', ensureAuthenticated, (req, res) => {
  Exercise.findOneAndUpdate(
    {
      name: req.body.exerciseId,
    },
    { $set: { mostRecent: req.body.workoutId } },
    { useFindAndModify: false },
    async (err, data) => {
      try {
        if (err) throw err;
        if (!data) {
          res.status(400).json({ msg: 'No exercise found' });
        }
        res.status(201).json({ msg: 'Exercise updated' });
      } catch (err) {
        return res.status(400).json({ msg: 'Something went wrong: ', err });
      }
    },
  );
});

router.delete('/exercise', ensureAuthenticated, (req, res) => {
  Exercise.find(
    {
      name: req.body.exerciseId,
    },
    async (err, data) => {
      try {
        if (err) throw err;
        if (!data) {
          res.status(400).json({ msg: 'No exercise found' });
        }
        res.status(201).json({ msg: 'Exercise deleted' });
      } catch (err) {
        return res.status(400).json({ msg: 'Something went wrong: ', err });
      }
    },
  );
});

module.exports = router;
