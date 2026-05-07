import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";


  cloudinary.config({
  cloud_name: "dxezhnkkl",
  api_key: "566259851266495",
  api_secret: "lqdHAZRTXz5TsYcdU1LEu70sZIc"
});


const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const normalizedPath = path.resolve(localFilePath);

    console.log("Uploading:", normalizedPath);

    const response = await cloudinary.v2.uploader.upload(
      normalizedPath,
      {
        resource_type: "auto",
      }
    );

    console.log("Upload success:", response.secure_url);

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;

  } catch (error) {
    console.log("Cloudinary upload error:", error);

    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };