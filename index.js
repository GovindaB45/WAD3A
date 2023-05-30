const express = require("express");
const app = express();
const Port = 4000;
app.use(express.static("public"));

app.listen(Port, () => {
  console.log(`Server listening on port::${Port}`);
});
