import React from "react";
import Carousel from "@/components/ui/Carousel";
import TopCategories from "@/components/home/TopCategories";
import CurrentSales from "@/components/home/CurrentSales";
import MostPopularInCategory from "@/components/home/MostPopular";
import { MOST_POPULAR_IN_FASHION } from "@/constants/mostPopularInCategory";
import PopularItems from "@/components/home/PopularItems";
import TopSelection from "@/components/home/TopSelection";

export default function Home() {
  return (
    <>
      <div className="container mt-4">
        <Carousel
          images={["/bg-1.jpg", "/bg-2.jpg", "/bg-3.jpg", "/bg-4.jpg"]}
        />
        <TopCategories />
      </div>
      <CurrentSales />
      <section className="container space-y-4 my-4">
        <h1 className="text-xl text-emphasisText font-semibold">
          Most Popular
        </h1>
        <MostPopularInCategory
          category="fashion"
          href="/fashion"
          products={MOST_POPULAR_IN_FASHION}
        />
        <MostPopularInCategory
          category="electronics"
          href="/electronics"
          products={MOST_POPULAR_IN_FASHION}
        />
      </section>
      <PopularItems />
      <TopSelection />
    </>
  );
}
