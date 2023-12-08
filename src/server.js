const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("\nConnected to DB");
        app.emit("ready");
    })
    .catch((err) => {
        console.log(err.message);
    });

const startServer = () => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

app.on("ready", startServer);
