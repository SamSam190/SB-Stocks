const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

const connectToDB = async () => {
  let MONGO_URI = process.env.MONGO_URI;

  try {
    // If no URI provided or connecting to local missing DB, spin up an automated in-memory server
    if (!MONGO_URI || MONGO_URI === "mongodb://127.0.0.1:27017/Stocks") {
      console.log("No remote database provided. Spinning up an automated local MongoDB memory server...");
      const mongoServer = await MongoMemoryServer.create();
      MONGO_URI = mongoServer.getUri() + "Stocks";
      console.log(`Local MongoDB Memory Server started at: ${MONGO_URI}`);
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Successfully connected to MONGO DB at ${MONGO_URI}`);
    
  } catch (e) {
    console.error(`Error in db connection: ${e.message}`);
  }
};

module.exports = connectToDB;