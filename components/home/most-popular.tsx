import { MostPopularInCategoryItem } from "@/constants/mostPopularInCategory";
import { cn } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  href: string;
  products: MostPopularInCategoryItem[];
};

const MostPopularInCategory = ({ category, href, products }: Props) => {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-emphasisText">
          In {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
        <Link href={href} className="text-sm text-primary hover:underline">
          View all
          <span className="ml-1" aria-hidden="true">
            &gt;
          </span>
          <span className="sr-only">View all products in {category}</span>
        </Link>
      </div>

      <div className="overflow-x-auto pb-4 -mx-4 px-4">
        <div className="grid grid-flow-col gap-4 min-w-max md:grid-flow-row md:grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))]">
          {products.map((item, index) => (
            <div className="flex-shrink-0 w-52 group" key={index}>
              <div className="rounded-t-md aspect-[3/4] relative overflow-hidden shadow-md">
                <Image
                  src={item.img}
                  fill
                  alt={item.productName}
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                {item.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.discount}% OFF
                  </div>
                )}
                <div className="absolute inset-0 bg-neutral-400 opacity-70 translate-x-full group-hover:transform-none transition-transform duration-500">
                  <div className="flex flex-col gap-2 rounded-lg px-2 pt-10 items-end">
                    <button
                      className="border-none p-2 bg-white rounded-md hover:text-highlight"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                    <button
                      className="border-none p-2 bg-white rounded-md hover:text-highlight"
                      title="Add to Wishlist"
                    >
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <Link
                href="/product/1231ss"
                className="border-x border-b rounded-b-md p-2 bg-background"
              >
                <p className="text-sm font-medium line-clamp-2">
                  {item.productName}
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-semibold">
                    Rs.{" "}
                    {(
                      item.price -
                      ((item.discount ?? 0) / 100) * item.price
                    ).toFixed(2)}
                  </span>
                  {item.discount && (
                    <span
                      className={cn(
                        "line-through text-xs text-muted-foreground"
                      )}
                    >
                      Rs. {item.price.toFixed(2)}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopularInCategory;
