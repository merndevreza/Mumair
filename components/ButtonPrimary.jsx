"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ButtonPrimary = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn(
        `bg-primary font-normal tracking-wide xl:text-[21px] text-white xl:leading-8 rounded-[5px] xl:px-5 xl:h-[52px] ${className} `
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
