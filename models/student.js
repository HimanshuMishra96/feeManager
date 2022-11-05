const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  admissionNo: {
    type: Number,
    required: false,
    default: null,
  },
  SrNo: {
    type: Number,
    required: false,
    default: null,
  },
  AadharNo: {
    type: Number,
    required: false,
    default: null,
  },
  studentName: {
    type: String,
    required: false,
    default: null,
  },
  fatherName: {
    type: String,
    required: false,
    default: null,
  },
  motherName: {
    type: String,
    required: false,
    default: null,
  },
  permanentAddress: {
    type: String,
    required: false,
    default: null,
  },
  localAddress: {
    type: String,
    required: false,
    default: null,
  },
  religion: {
    type: String,
    required: false,
    default: null,
  },
  caste: {
    type: String,
    required: false,
    default: null,
  },
  parentsOccupation: {
    type: String,
    required: false,
    default: null,
  },
  parentAnnualInc: {
    type: String,
    required: false,
    default: null,
  },
  dob: {
    type: String,
    required: false,
    default: null,
  },
  gender: {
    type: String,
    required: false,
    default: null,
  },
  previousSchool: {
    type: String,
    required: false,
    default: null,
  },
  lastExam: {
    type: String,
    required: false,
    default: null,
  },
  addmissionFor: {
    type: String,
    required: false,
    default: null,
  },
  medium: {
    type: String,
    required: false,
    default: null,
  },
  contactNo: {
    type: Number,
    required: false,
    default: null,
  },
  alterContactNo: {
    type: Number,
    required: false,
    default: null,
  },
});

module.exports = mongoose.model("student", studentSchema);