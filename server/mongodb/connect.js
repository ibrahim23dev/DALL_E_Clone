import mongoose from "mongoose";

const connectBD = () => {
    mongoose.set('strictQuery', true);

    // Define your MongoDB connection string
    const url = 'mongodb+srv://image:image101@cluster6.or0rlqh.mongodb.net/Image';

    mongoose.connect(url).then(() => console.log("Connected to MongoDB")).catch((err) => {
        console.error(err);
    });
};

export default connectBD;
