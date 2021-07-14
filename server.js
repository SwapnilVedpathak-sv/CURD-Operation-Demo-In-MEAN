const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
var router = express.Router();
const bodyParse = require("body-parser");
const JsonData = bodyParse.json();
const app = express();
const path = require("path");
const cors = require("cors");
const header = require("./middleware/header");
const ProductsData = require("./models/products");
require("./database/databaseConnection");
const PORT = process.env.PORT || 8000;

require("dotenv").config();

const authRouter = require("./routes/authRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./dist/CURD-Assessment"));
app.use(cors({ origin: "*" }));
app.use(header);
app.use(compression());
app.use("/", authRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src", "index.html"));
});


// Post Request For Create Product

app.post("/ndsCertificateData", (req, res) => {
  const postRequest = new ProductsData(req.body);
  postRequest
    .save()
    .then(() => {
      res.status(201).send(postRequest);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// Get Request For All Product

app.get("/ndsCertificateData", async (req, res) => {
  try {
    const getAllData = await ProductsData.find();
    res.status(200).send(getAllData);
  } catch (e) {
    res.status(501).send(e);
  }
});

// Get Request For Only Single Product

app.get("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleData = await ProductsData.findById(_id);
    res.send(getSingleData);
  } catch (e) {
    res.send(e);
  }
});

// Put Request For Update Specific Product

app.put("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const putRequest = await ProductsData.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(putRequest);
  } catch (e) {
    res.send(e);
  }
});

// Patch Request For Update Specific Product

app.patch("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const patchRequest = await ProductsData.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(patchRequest);
  } catch (e) {
    res.send(e);
  }
});

// Delete Request For Delete Specific Product

app.delete("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteRequest = await ProductsData.findByIdAndDelete(_id);
    res.send(deleteRequest);
  } catch (e) {
    res.send(e);
  }
});

app.listen(PORT, () => {
  console.log(`Connection is setup at ${PORT}`);
});
