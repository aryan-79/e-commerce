import ImageSelector from "@/components/ui/ImageSelector";
import Select from "@/components/ui/Select";
import React from "react";

const TestPage = () => {
  const action = async (formData: FormData) => {
    "use server";
    console.log(Object.fromEntries(formData));
  };
  return (
    <div className="grid h-screen w-full place-items-center">
      <form action={action}>
        <input type="text" name="test" id="" />
        <div className="w-64">
          <ImageSelector />
        </div>
        <button className="btn-primary" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default TestPage;
