
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/invite/:code', (req, res) => {
  const inviteCode = req.params.code;
  res.redirect(`quickteams://invite/${inviteCode}`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
