const express = require("express");
const app = express();
const router = require("./routes/index");
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
