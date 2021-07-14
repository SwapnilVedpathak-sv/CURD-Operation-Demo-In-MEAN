const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
var router = express.Router();
const bodyParse = require("body-parser");
const JsonData = bodyParse.json();
// const multer = require('multer');
const app = express();
const path = require("path");
const cors = require("cors");
const header = require("./middleware/header");
const AllCertificateData = require("./models/expence");
require("./database/databaseConnection");
const PORT = process.env.PORT || 8000;

require("dotenv").config();

const authRouter = require("./routes/authRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./dist/ndsapp"));
app.use(cors({ origin: "*" }));
app.use(header);
app.use(compression());
app.use("/", authRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src", "index.html"));
});

// var storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, "images");
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });

// const upload = multer({ storage: storage })

// POST Request for Image Upload
// let lastId = 0;

// app.post('/imageUpload',JsonData ,upload.single('file') , (req,res,next)=>{
//   const file = req.file;
//   console.log(file.filename);
//   if(!file){
//       const error = new error('no file')
//       error.httpStatusCode=400
//       return next(error)
//   }

//   var send = new AllCertificateData({

//       moneyPaidBy: req.body.moneyPaidBy,
//       toWhomMoneyPaid: req.body.toWhomMoneyPaid,
//       totalAmount: req.body.totalAmount,
//       paidAmount: req.body.paidAmount,
//       pendingAmount: req.body.pendingAmount,
//       category: req.body.category,
//       billDate: req.body.billDate.slice(0,15),
//       id: lastId++,
//       imageData: file.filename
//   })
//   send.save().then((responce)=>{
//       console.log(file.filename);
//   }).catch((err)=>{
//       console.log(err);
//   })
//   res.send(file)

// })

// Post Request For Create Student

app.post("/ndsCertificateData", (req, res) => {
  const postRequest = new AllCertificateData(req.body);
  postRequest
    .save()
    .then(() => {
      res.status(201).send(postRequest);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// Get Request For All Student

app.get("/ndsCertificateData", async (req, res) => {
  try {
    const getAllData = await AllCertificateData.find();
    // console.log(getExpencesData);
    res.status(200).send(getAllData);
  } catch (e) {
    res.status(501).send(e);
  }
});

// Get Request For Only Single Student

app.get("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleData = await AllCertificateData.findById(_id);
    res.send(getSingleData);
  } catch (e) {
    res.send(e);
  }
});

// Put Request For Update Specific Student

app.put("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const putRequest = await AllCertificateData.findByIdAndUpdate(
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

// Patch Request For Update Specific Student

app.patch("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const patchRequest = await AllCertificateData.findByIdAndUpdate(
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

// Delete Request For Delete Specific Student

app.delete("/ndsCertificateData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteRequest = await AllCertificateData.findByIdAndDelete(_id);
    res.send(deleteRequest);
  } catch (e) {
    res.send(e);
  }
});

app.listen(PORT, () => {
  console.log(`Connection is setup at ${PORT}`);
});
