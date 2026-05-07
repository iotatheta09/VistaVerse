




import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dxezhnkkl",
  api_key:566259851266495,
  api_secret:"lqdHAZRTXz5TsYcdU1LEu70sZIc",
});

cloudinary.v2.api.ping()
  .then(console.log)
  .catch(console.error);