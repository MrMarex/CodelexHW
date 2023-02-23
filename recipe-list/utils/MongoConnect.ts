import mongoose from 'mongoose';

const MongoConnect = () => {
    mongoose.connect('mongodb://localhost:27017/recipes');
};

export default MongoConnect;