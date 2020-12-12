const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    exercises: [
      {
        exerciseName: 'pull-up',
        exerciseDescription: 'You pull yourself up',
        exerciseType: 1,
      },
      {
        exerciseName: 'push-up',
        exerciseDescription: 'You push yourself up',
        exerciseType: 1,
      },
      {
        exerciseName: 'sit-up',
        exerciseDescription: 'You sit yourself up',
        exerciseType: 1,
      },
    ],
  });
});

module.exports = router;
