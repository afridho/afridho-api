require('dotenv').config();
const MONGODB_USER = process.env.MONGODB_PASS;
const MONGODB_PASS = process.env.MONGODB_PASS;
const DB_NAME = process.env.DB_NAME;
const { MongoClient, ServerApiVersion } = require('mongodb');

// Connect to MongoDB
const getClientDB = () => {
    const uri = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@ac-eymobfz-shard-00-00.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-01.dpxrwue.mongodb.net:27017,ac-eymobfz-shard-00-02.dpxrwue.mongodb.net:27017/?ssl=true`;
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
    });
    return client.db(DB_NAME);
};

module.exports = getClientDB;
