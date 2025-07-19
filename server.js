const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔗 תמיכה בקישור עם פרמטר groupId
app.get('/invite', (req, res) => {
  const groupId = req.query.groupId;
  if (groupId) {
    res.redirect(`quickteams://invite/${groupId}`);
  } else {
    res.status(400).send('Missing groupId');
  }
});

// 🔗 תמיכה בקישור עם path דינמי /invite/:code
app.get('/invite/:code', (req, res) => {
  const inviteCode = req.params.code;
  res.redirect(`quickteams://invite/${inviteCode}`);
});

// 🧾 קובץ apple-app-site-association
app.get('/apple-app-site-association', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'apple-app-site-association'));
});

// 🌐 קבצים סטטיים
app.use(express.static(path.join(__dirname, 'public')));

// 🚀 הפעלת השרת
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
