const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to DB');
    app.emit('ready')
}).catch((err) => {});


const startServer = () => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

app.on('ready', startServer);