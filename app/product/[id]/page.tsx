"use client";
import { cn } from "@/lib/utils";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type PropsType = {
  productDetails: {};
  params: {
    id: string;
  };
};

const ProductPage = ({ params }: PropsType) => {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const images = ["/bg-1.jpg", "/bg-2.jpg", "/bg-3.jpg"];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    console.log(scrollContainer);
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollLeft;
      const imageWidth = scrollContainer.clientWidth;
      const newIndex = Math.round(scrollPosition / imageWidth);
      setCurrentImageIndex(newIndex);
    };

    const handleClick = () => {
      scrollContainer.scrollBy(
        currentImageIndex * scrollContainer.clientWidth,
        0
      );
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    document.querySelectorAll(".indicator").forEach((indic) => {
      indic.addEventListener("click", () => {
        setCurrentImageIndex(
          parseInt(indic.getAttribute("data-currimage") ?? "0")
        );
        handleClick();
      });
    });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1400px] mx-auto lg:grid lg:grid-cols-2 lg:mt-8">
      <div className="overflow-hidden shadow-lg flex-shrink-0 lg:hidden">
        <div className="relative h-[55vh] md:h-60vh]">
          <div
            className="absolute top-0 left-0 w-full h-full overflow-x-auto snap-x snap-mandatory"
            ref={scrollContainerRef}
          >
            <div className="flex h-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 snap-center relative"
                >
                  <Image
                    src={img}
                    alt={`image ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between absolute w-full p-4">
            <button
              className="border-none text-white"
              onClick={() => router.back()}
            >
              <ChevronLeft />
            </button>
            <button
              className="border-none text-white"
              onClick={() => console.log("added to wishlist")}
            >
              <Heart />
            </button>
          </div>
          <div className="flex absolute bottom-4 left-1/2 gap-2 -translate-x-1/2 ">
            {images.map((_, index) => (
              <div
                className={cn(
                  "h-2 w-2 rounded-full bg-red-400 indicator transition-all duration-500",
                  currentImageIndex === index && "w-4"
                )}
                key={index}
                data-currimage={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-[calc(100vh-8rem)]">
        <div className="relative w-full h-full">
          <Image
            src={images[currentImageIndex]}
            fill
            sizes="50vw"
            alt=""
            className="object-cover"
          />

          <div className="flex flex-col gap-4 absolute left-4 top-4">
            {images.map((image, index) => (
              <button
                className={cn(
                  "size-8 rounded-lg overflow-hidden relative",
                  currentImageIndex === index && "border-2 border-highlight"
                )}
                key={index}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image}
                  fill
                  sizes="80px"
                  alt=""
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <span className="bg-highlight rounded-lg py-1 px-2 mt-4 inline-block text-sm text-white">
          Fashion
        </span>
        <h1 className="text-emphasisText text-lg font-semibold">
          Product {params.id}
        </h1>
        {/* Description */}
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          deserunt numquam exercitationem autem iusto vel eius rerum tenetur
          cupiditate nobis.
        </p>
        <div className="flex justify-between items-center my-4">
          <p>
            <StarFilledIcon
              fontSize="1rem"
              color="#f28d30"
              className="inline"
            />{" "}
            <span className="font-semibold">4.5</span> (2.6k reviews)
          </p>

          <div className="flex gap-4">
            <div className="rounded-full size-4 bg-green-400"></div>
            <div className="rounded-full size-4 bg-yellow-400"></div>
            <div className="rounded-full size-4 bg-blue-400"></div>
            <div className="rounded-full size-4 bg-gray-400"></div>
          </div>
        </div>
        {/* Specifications */}
        <h4 className="font-semibold">Specifications</h4>
        <div className="mt-2 space-y-1">
          <div className="text-sm font-[500] flex justify-between">
            <span>Brand</span>{" "}
            <span className="font-normal text-xs">Clothing</span>
          </div>
          <div className="text-sm font-[500] flex justify-between">
            <span>Weight</span>{" "}
            <span className="font-normal text-xs">250gm</span>
          </div>
          <div className="text-sm font-[500] flex justify-between">
            <span>Condition</span>{" "}
            <span className="font-normal text-xs">NEW</span>
          </div>
          <div className="text-sm font-[500] flex justify-between">
            <span>Category</span>{" "}
            <span className="font-normal text-xs">Fashion clothing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
