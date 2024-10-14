import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import NavigationLinks from "../NavigationLinks";
import ButtonPrimary from "../ButtonPrimary";
import Link from "next/link";
import DownloadCV from "./DownloadCV";

const MobileHamburger = ({ paths, className }) => {
  return (
    <Sheet>
      <SheetTrigger
        className={cn(
          `bg-primary text-lg text-white py-1 px-2 rounded-[5px] ${className}`
        )}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="text-left">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            <NavigationLinks
              mobileVertical={true}
              className="lg:hidden"
              paths={paths}
            />
            <DownloadCV className="sm:hidden block w-full text-center mt-4"/>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHamburger;
