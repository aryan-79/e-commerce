"use client";
import { cn } from "@/lib/utils";
import { StarFilledIcon } from "@radix-ui/react-icons";
// import { AnimatePresence, motion } from "framer-motion";
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
        0,
      );
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    document.querySelectorAll(".indicator").forEach((indic) => {
      indic.addEventListener("click", () => {
        setCurrentImageIndex(
          parseInt(indic.getAttribute("data-currimage") ?? "0"),
        );
        handleClick();
      });
    });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto lg:mt-8 lg:grid lg:max-w-[900px] lg:grid-cols-2 xl:max-w-[1100px] 2xl:max-w-[1400px]">
      <div className="flex-shrink-0 overflow-hidden shadow-lg lg:hidden">
        <div className="md:h-60vh] relative h-[55vh]">
          <div
            className="absolute left-0 top-0 h-full w-full snap-x snap-mandatory overflow-x-auto"
            ref={scrollContainerRef}
          >
            <div className="flex h-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full flex-shrink-0 snap-center"
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

          <div className="absolute flex w-full justify-between p-4">
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
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <div
                className={cn(
                  "indicator h-2 w-2 rounded-full bg-red-400 transition-all duration-500",
                  currentImageIndex === index && "w-4",
                )}
                key={index}
                data-currimage={index}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden h-[calc(100vh-8rem)] lg:block">
        <div className="relative h-full w-full">
          <Image
            src={images[currentImageIndex]}
            fill
            sizes="50vw"
            alt=""
            className="object-cover"
            priority
          />

          <div className="absolute left-4 top-4 flex flex-col gap-4">
            {images.map((image, index) => (
              <button
                className={cn(
                  "relative size-8 overflow-hidden rounded-lg",
                  currentImageIndex === index && "border-2 border-highlight",
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
        <span className="mt-4 inline-block rounded-lg bg-highlight px-2 py-1 text-sm text-white">
          Fashion
        </span>
        <h1 className="text-lg font-semibold text-emphasisText">
          Product {params.id}
        </h1>
        {/* Description */}
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          deserunt numquam exercitationem autem iusto vel eius rerum tenetur
          cupiditate nobis.
        </p>
        <div className="my-4 flex items-center justify-between">
          <p>
            <StarFilledIcon
              fontSize="1rem"
              color="#f28d30"
              className="inline"
            />{" "}
            <span className="font-semibold">4.5</span> (2.6k reviews)
          </p>

          <div className="flex gap-4">
            <div className="size-4 rounded-full bg-green-400"></div>
            <div className="size-4 rounded-full bg-yellow-400"></div>
            <div className="size-4 rounded-full bg-blue-400"></div>
            <div className="size-4 rounded-full bg-gray-400"></div>
          </div>
        </div>
        {/* Specifications */}
        <h4 className="font-semibold">Specifications</h4>
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-sm font-[500]">
            <span>Brand</span>{" "}
            <span className="text-xs font-normal">Clothing</span>
          </div>
          <div className="flex justify-between text-sm font-[500]">
            <span>Weight</span>{" "}
            <span className="text-xs font-normal">250gm</span>
          </div>
          <div className="flex justify-between text-sm font-[500]">
            <span>Condition</span>{" "}
            <span className="text-xs font-normal">NEW</span>
          </div>
          <div className="flex justify-between text-sm font-[500]">
            <span>Category</span>{" "}
            <span className="text-xs font-normal">Fashion clothing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
