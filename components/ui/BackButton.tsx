"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="px-2">
      <ArrowLeft />
    </button>
  );
};

export default BackButton;
