const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");
const client = new MongoClient(new Buffer.from(process.env.CONNECTIONSTRING, "base64").toString("binary"));

async function start() {
  await client.connect();
  module.exports = client;
  const app = require("./app");
  app.listen(process.env.PORT);
  console.log("Running backend Server");
}

start();
