import Logo from "@/components/Logo/Logo";
import ImageSelector from "@/components/ui/ImageSelector";
import Label from "@/components/ui/Label";
import Select from "@/components/ui/Select";
import { ProductCategories } from "@/constants/categories";
import { redirect } from "next/navigation";
import React from "react";

const SellerPage = () => {
  const action = async (formData: FormData) => {
    "use server";
    const { name, brand, category, weight, images } =
      Object.fromEntries(formData);
    console.log({ name, brand, category, weight, images });
    redirect("/sell");
  };
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex min-h-[400px] w-11/12 flex-col items-center rounded-lg p-6 shadow-xl lg:w-1/2">
        <div className="blob mx-auto mb-8 grid h-16 w-20 place-items-center">
          <Logo size={32} />
        </div>

        <form action={action} className="w-full space-y-4">
          <p className="my-4 text-lg font-medium">Details</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <Label htmlFor="name">Product Name</Label>
              <input
                type="text"
                name="name"
                id="name"
                minLength={1}
                className="invalid:border-red-400"
              />
            </div>
            <div className="">
              <Label htmlFor="amount">Amount (In NPR)</Label>
              <input
                type="number"
                inputMode="numeric"
                name="amount"
                id="amount"
                min={0}
              />
            </div>
            <div className="">
              <Label htmlFor="discount">Discount (in %)</Label>
              <input
                type="number"
                inputMode="numeric"
                name="discount"
                id="discount"
                min={0}
              />
            </div>
          </div>
          <p className="my-4 text-lg font-medium">Specifications</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="">
              <Label htmlFor="brand">Brand</Label>
              <input type="text" name="brand" id="brand" />
            </div>

            <div className="">
              <Label htmlFor="weight">Weight (in grams)</Label>
              <input
                type="number"
                name="weight"
                id="weight"
                inputMode="numeric"
                min={0}
              />
            </div>
            <div className="">
              <Label htmlFor="category">Category</Label>
              <Select
                title="Select Category"
                options={ProductCategories}
                name="category"
                id="category"
              />
            </div>
            <div className="col-span-2">
              <ImageSelector />
            </div>
          </div>
          <button type="submit" className="primary-btn w-full rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
