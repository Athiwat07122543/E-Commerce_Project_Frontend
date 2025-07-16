import React from "react";
import { useState } from "react";
import axios from "axios";
const VITE_BACKEND = import.meta.env.VITE_BACKEND

const UploadPage = () => {
  const hdUpdate = async (e) => {
    const fileUpload = Array.from(e.target.files);
    const formData = new FormData();
    fileUpload.forEach((file) => {
      formData.append("image", file);
    });
    try {
      console.log(formData);
      const res = await axios.post(
        `${VITE_BACKEND}/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="flex
    "
    >
      <div>อัพโหลดรูป</div>
      <input
        type="file"
        className="border"
        name="fileName"
        onClick={hdUpdate}
        multiple
      />
    </div>
  );
};

export default UploadPage;
