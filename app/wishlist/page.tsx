import React from "react";
import BackButton from "@/components/ui/back-button";
import { WishListItem } from "@/components/WishlistItem";

const WishlistPage = () => {
  return (
    <div className="container">
      <div className="flex justify-between">
        <BackButton />
      </div>
      <WishListItem
        imageSrc="/fashion.png"
        title="Fashion"
        description="Non eu qui magna sit.Cillum velit irure fugiat et mollit voluptate et ex do excepteur fugiat."
      />{" "}
      <WishListItem
        imageSrc="/fashion.png"
        title="Fashion"
        description="Non eu qui magna sit.Cillum velit irure fugiat et mollit voluptate et ex do excepteur fugiat."
      />{" "}
      <WishListItem
        imageSrc="/fashion.png"
        title="Fashion"
        description="Non eu qui magna sit.Cillum velit irure fugiat et mollit voluptate et ex do excepteur fugiat."
      />{" "}
      <WishListItem
        imageSrc="/fashion.png"
        title="Fashion"
        description="Non eu qui magna sit.Cillum velit irure fugiat et mollit voluptate et ex do excepteur fugiat."
      />{" "}
      <WishListItem
        imageSrc="/fashion.png"
        title="Fashion"
        description="Non eu qui magna sit.Cillum velit irure fugiat et mollit voluptate et ex do excepteur fugiat."
      />{" "}
    </div>
  );
};

export default WishlistPage;
