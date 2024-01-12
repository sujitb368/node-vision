var express = require("express");
var router = express.Router();

const rekognition = require("../aws.config");

router.post("/classify", async function (req, res, next) {
  // Your code starts here

  // Check if the file is missing
  if (!req.files || !req.files?.file) {
    return res
      .status(400)
      .json({ message: "File is missing in the request", success: false });
  }

  //image file data
  const imageBuffer = req.files.file.data;

  const params = {
    Image: {
      Bytes: imageBuffer,
    },
  };

  try {
    const response = await rekognition.detectLabels(params).promise();
    labels = response.Labels.map((label) => label.Name);

    res.status(200).json({
      message: "list of Labels",
      success: true,
      labels,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }

  // Your code ends here //
});

module.exports = router;
