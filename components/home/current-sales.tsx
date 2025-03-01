"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CurrentSales = () => {
  const [timeRemaining, setTimeRemaining] = useState(43200);
  const [hours, setHours] = useState(Math.floor(43200 / (60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor((43200 % 3600) / 60));
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        const newTime = prevTimeRemaining - 1;
        if (newTime >= 0) {
          setHours(Math.floor(newTime / (60 * 60)));
          setMinutes(Math.floor((newTime % 3600) / 60));
          setSeconds(newTime % 60);
        } else {
          clearInterval(interval);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-16 bg-[#1b2f5a]">
      <div className="container flex items-center gap-6 h-full px-4">
        <div className="">
          <Image src="/sale.png" width={60} height={60} alt="sale" />
        </div>
        <p className="text-white text-sm">
          Sale ends in <br />
          {hours} hrs {minutes} mins {seconds} secs
        </p>
      </div>
    </div>
  );
};

export default CurrentSales;
