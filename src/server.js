const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

// Conecta com o banco de dados
mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("\nConnected to DB");
        app.emit("ready");
    })
    .catch((err) => {
        console.log(err.message);
    });

// Inicia o servidor
const startServer = () => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

// Inicia o servidor apos a conexão com o banco de dados
app.on("ready", startServer);
