const mongoose = require("mongoose");

const connectionString = 'mongodb+srv://ravi:1234@nodeexpressproject.u1tz0hh.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
}

module.exports = connectDB;
