require('dotenv').config();
const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
const { MongoClient } = require('mongodb');

/**
 * Class representing a MongoDB client for a specific collection.
 */
class ClientDB {
    /**
     * Creates an instance of ClientDB.
     * @param {string} collectionName - The name of the collection to interact with.
     */
    constructor(collectionName) {
        this.client = new MongoClient(DB_URI);
        this.collectionName = collectionName;
        this.collection = null;
    }

    /**
     * Connects to the MongoDB database and initializes the collection.
     * @returns {Promise<void>}
     */
    async connect() {
        if (!this.collection) {
            await this.client.connect();
            const database = this.client.db(DB_NAME); // Ensure you have your database name in your .env file
            this.collection = database.collection(this.collectionName);
        }
    }

    /**
     * Reads a document from the collection based on the provided query.
     * @param {Object} query - The query to find the document.
     * @example
     * const result = await read({ label: 'label name' });
     * @returns {Promise<Object|null>} The found document or null if not found.
     */
    async read(query) {
        await this.connect(); // Ensure the connection is established
        return await this.collection.findOne(query);
    }

    /**
     * Inserts a new document into the collection.
     * @param {Object} data - The data to insert.
     * @example
     * await insert({ name: 'New App', version: '1.0.0' });
     * @returns {Promise<Object>} The result of the insert operation.
     */
    async insert(data) {
        await this.connect(); // Ensure the connection is established
        return await this.collection.insertOne(data);
    }

    /**
     * Updates a document in the collection based on the provided query.
     * @param {Object} query - The query to find the document to update.
     * @param {Object} data - The data to update.
     * @example
     * await update({ label: 'label name' }, { version: '1.0.1' });
     * @returns {Promise<Object>} The result of the update operation.
     */
    async update(query, data) {
        await this.connect(); // Ensure the connection is established
        return await this.collection.updateOne(query, { $set: data });
    }

    /**
     * Deletes a document from the collection based on the provided query.
     * @param {Object} query - The query to find the document to delete.
     * @example
     * await delete({ label: 'label name' });
     * @returns {Promise<Object>} The result of the delete operation.
     */
    async delete(query) {
        await this.connect(); // Ensure the connection is established
        return await this.collection.deleteOne(query);
    }

    /**
     * Finds multiple documents in the collection based on the provided query.
     * @param {Object} query - The query to find the documents.
     * @example
     * const results = await find({ label: 'label name' });
     * @returns {Promise<Array>} An array of found documents.
     */
    async find(query) {
        await this.connect(); // Ensure the connection is established
        return await this.collection.find(query).toArray();
    }

    /**
     * Closes the MongoDB connection.
     * @returns {Promise<void>}
     */
    async close() {
        await this.client.close();
    }
}

module.exports = ClientDB;
