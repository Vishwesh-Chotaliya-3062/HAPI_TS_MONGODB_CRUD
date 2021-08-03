import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/crud_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is connected"))
    .catch(err=> console.log(err))