import Label from "@/components/ui/Label";
import Select from "@/components/ui/Select";
import { Product_Categories } from "@/constants/categories";
import { Signature } from "lucide-react";
import React from "react";

const SellerPage = () => {
  const action = async (formData: FormData) => {
    "use server";
    const { name, brand, category, weight } = Object.fromEntries(formData);
    console.log({ name, brand, category, weight });
  };
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex min-h-[400px] w-11/12 flex-col items-center rounded-lg p-6 shadow-xl md:w-1/2">
        <div className="blob mx-auto mb-8 grid h-16 w-20 place-items-center">
          <Signature className="size-12 text-slate-300" />
        </div>

        <form action={action} className="w-full space-y-4">
          <div className="">
            <p className="my-4 text-lg font-medium">Details</p>
            <div className="mb-4">
              <Label htmlFor="name">Product Name</Label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="mb-4">
              <Label htmlFor="amount">Amount (In NPR)</Label>
              <input
                type="number"
                inputMode="numeric"
                name="amount"
                id="amount"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="discount">Discount (in %)</Label>
              <input
                type="number"
                inputMode="numeric"
                name="discount"
                id="discount"
              />
            </div>
          </div>
          <div className="">
            <p className="my-4 text-lg font-medium">Specifications</p>
            <div className="mb-4">
              <Label htmlFor="brand">Brand</Label>
              <input type="text" name="brand" id="brand" />
            </div>
            <div className="mb-4">
              <Label htmlFor="category">Category</Label>
              <Select
                title="Select Category"
                options={Product_Categories}
                name="category"
                id="category"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="weight">Weight (in grams)</Label>
              <input
                type="number"
                name="weight"
                id="weight"
                inputMode="numeric"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
