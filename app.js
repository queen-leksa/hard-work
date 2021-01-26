let exp = require("express");
let app = exp();
let port = 80;
app.use(exp.static("./public"));

app.listen(port);
