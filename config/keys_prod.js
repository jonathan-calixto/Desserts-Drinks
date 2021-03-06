module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY,
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    uploadedFileURL: "https://dessertanddrinks-pro.s3.amazonaws.com/",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-west-1",
    bucketName: "dessertanddrinks-pro",
  },
  googleMapApiKey: process.env.REACT_APP_GOOGLE_KEY,
  API_BASE_URL: 'http://api.yelp.com/v3',
  yelpApiKey: process.env.REACT_APP_YELP_KEY,
};
