require('dotenv').config();
const mongoose = require('mongoose');




// const connectDB = (url) => {
//     return mongoose.connect(process.env.MONGO_URL)
//     .then(console.log("Data connected"))
//     .catch(err => (err))
// }

function connectDB(){
    mongoose.connect(process.env.MONGO_URL, 
        { useNewUrlParser: true,
          //useUnifiedTopology: true
        }
    );
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database Connected');
    }).on('error', () => {
        console.log('Connection with Database failed');
    })
}

module.exports = connectDB;