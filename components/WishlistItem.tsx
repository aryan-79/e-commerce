import Image from "next/image";
import Link from "next/link";

interface WishListItemProps {
  imageSrc: string;
  title: string;
  description: string;
}

export function WishListItem({
  imageSrc,
  title,
  description,
}: WishListItemProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Link href="/product/id" className="flex items-center p-4">
        <div className="relative shrink-0 size-28 md:size-32 rounded-sm overflow-hidden bg-highlight">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold mb-2 truncate" title={title}>
            {title}
          </h3>
          <p
            className="text-gray-600 line-clamp-1 overflow-hidden"
            title={description}
          >
            {description}
          </p>
          <p className="text-sm text-neutral-400">
            <span className="font-semibold text-emphasisText">Rs. 3,000</span>{" "}
            <span className="line-through">Rs. 4,000</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
