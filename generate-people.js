require("dotenv").config({ path: "./.env.local" });

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let dbPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to envs");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  dbPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  dbPromise = client.connect();
}

const { faker } = require("@faker-js/faker");

createUser = () => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  photo: faker.image.avatar(),
});

const json = [...new Array(100000)].map((_) => createUser());
(async () => {
  await (await dbPromise).db().collection("people").insertMany(json);
})();
