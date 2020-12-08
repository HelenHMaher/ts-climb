const express = require('express');
// const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

// TODO: this is for production, not required for development
// app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'));
// });

app.get('/api/exercises', (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
