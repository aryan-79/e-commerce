"use client";

import React, { useState, useRef } from "react";
import { Upload, X } from "lucide-react";

export default function ImageSelector() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dataUrl, setDataUrl] = useState<any>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const reader = new FileReader();
    if (files) {
      console.log({ files });
      let i = 0;
      while (i < files.length) {}
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    const files = event.dataTransfer.files;

    // console.log(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      // console.log({ reader });
      // reader.onloadstart = (e) => {
      //   setCurrentState("loading");
      // };
      // reader.onabort = (e) => {
      //   setCurrentState("aborted");
      //   console.log("aborted");
      // };
      // reader.onerror = (e) => {
      //   console.log("error");
      //   setCurrentState("aborted");
      // };
      // reader.onloadend = (e) => {
      //   console.log("ended");
      //   setCurrentState("load end");
      // };
      // reader.onload = (e) => {
      //   setSelectedImage(e.target?.result as string);
      //   console.log({ res: reader.result });
      // };

      reader.readAsDataURL(file);

      setError(null);
    } else {
      setError("Please drop an image file.");
    }
  };

  const handleUpload = () => {
    // Mock upload functionality
    console.log("Uploading image...");
    // Here you would typically send the file to your server
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="mx-auto mt-8">
      <div
        className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4 text-center transition-colors hover:border-gray-400"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {selectedImage ? (
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="h-auto max-w-full rounded"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white transition-colors hover:bg-red-600"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="py-8">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              Click to select or drag and drop an image here
            </p>
          </div>
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        name="images"
        multiple
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {dataUrl && <img src={dataUrl} alt="test image" />}
    </div>
  );
}
