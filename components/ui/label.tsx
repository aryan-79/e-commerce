import React, { HTMLAttributes, ReactNode } from "react";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
}

const Label = ({ children, htmlFor, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} {...props} className="text-sm block mb-2">
      {children}
    </label>
  );
};

export default Label;
