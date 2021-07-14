const mongoose = require("mongoose");
const certificateGenerateSchema = new mongoose.Schema({
  customer_name: String,
  customer_email: String,
  customer_address: String,
  ambient_temp: String,
  relative_humidity: String,
  location_of_calibration: String,
  certificate_no: String,
  date_of_calibration: Object,
  next_calibration_due: Object,
  calibration_method_ref_IS: String,
  instrument_name: String,
  instrument_id_no: String,
  instrument_serial_no: String,
  instrument_make_model: String,
  instrument_type: String,
  instrument_range: String,
  instrument_least_count: String,
  acceptance_criteria: Number,
  instrument_unit: String,
  instrument_department: String,
  instrument_location: String,
  checkedFormType: String,
  calibration_result: Array,
  standard_instrument_details: Array
});

// New Collection

const AllCertificateData = new mongoose.model(
  "AllCertificateData",
  certificateGenerateSchema
);

module.exports = AllCertificateData;
