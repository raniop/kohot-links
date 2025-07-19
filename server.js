// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔗 דיפ לינק מהצורה: https://links.kohot.co/invite/ABC123
app.get('/invite/:code', (req, res) => {
  const inviteCode = req.params.code;
  const deepLink = `quickteams://invite/${inviteCode}`;
  console.log(`📲 Redirecting to deep link: ${deepLink}`);
  res.redirect(deepLink);
});

// 🧾 קובץ apple-app-site-association
app.get('/apple-app-site-association', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // חשוב מאוד!
  res.sendFile(path.join(__dirname, 'apple-app-site-association'), {
    dotfiles: 'allow'
  });
});


// 🌐 קבצים סטטיים (למשל index.html וכו')
app.use(express.static(path.join(__dirname, 'public')));

// 🚀 הפעלת השרת
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
