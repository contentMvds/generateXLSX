const express = require("express");
const main = require("./database");
const routers = require('./routers');

const app = express();
const port = 3000;

//Set up mongoose connection
main().catch((err) => console.log(err));

routers(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Access: http://localhost:${port}`)
});
