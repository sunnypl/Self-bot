const express = require('express');
const app = express();
const port = 3000 || 8080;

app.all('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`BOT IS ONLINE`);
  res.end();
});

function keepAlive() {
  app.listen(port, () => {
    console.log("24/7 KeepAlive Server is online!")
  });
}
module.exports = keepAlive;

/**********************************************************
 * @INFO
 * Bot Coded by MaDwin#8307 | https://discord.gg/madwin.dev
 * @INFO
 * Work for Madwin Development | https://discord.gg/JPUTVyKQRn
 * @INFO
 * Please Mention Us Madwin Development, When Using This Code!
 * @INFO
 *********************************************************/
