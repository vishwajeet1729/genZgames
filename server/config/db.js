const mongoose = require("mongoose");

const connectWithDB = () => {
  mongoose
    .connect("mongodb+srv://vishwajeetwalse9767:VIB0ZkNKcErpauIi@cluster0.qvr0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB GOT CONNECTED");
    })
    .catch((error) => {
      console.log("DB CONNECTION ISSUES");
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDB;
