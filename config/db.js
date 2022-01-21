const mongose = require('mongoose');

const connectDB = async() => {
    await  mongose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected");
};

module.exports = connectDB;