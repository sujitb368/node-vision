// sdk
const AWS = require("aws-sdk");

const { accessKeyId, region, secretAccessKey } = require("./constant");
//AWS credentials
AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

//instance of the Rekognition service
const rekognition = new AWS.Rekognition();

module.exports = rekognition;
