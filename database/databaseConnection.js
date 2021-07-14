const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://SwapnilVedpathak:Laxman9884@studentdata.fiifh.mongodb.net/productsInventory?retryWrites=true&w=majority`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connection is Successful");
  })
  .catch((e) => {
    console.log("No Connection");
  });