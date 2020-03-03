import React, { useState, useEffect } from "react";

import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import { fetchPhotos, openUploadWidget } from "../util/CloudinaryService";

export const Cloudinary = () => {
  const [images, setImages] = useState([]);

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: "takija",
      tags: [tag, "anImage"],
      uploadPreset: "upload"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if (photos.event === "success") {
          setImages([...images, photos.info.public_id]);
        }
      } else {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    fetchPhotos("image", setImages);
  }, []);
  console.log(images);
  return (
    <CloudinaryContext cloudName="takija">
      <div>
        <button onClick={() => beginUpload("image")}>Upload Image</button>
        <div>
          {images.map(i => (
            <Image publicId={i} key={i}>
              <Transformation width="150" height="150" crop="fill" />
            </Image>
          ))}
        </div>
      </div>
    </CloudinaryContext>
  );
};
