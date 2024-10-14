import { cn } from "@/lib/utils";
import Link from "next/link"; 

const DownloadCV = ({ className }) => {
  return (
    <Link
      href="/Resume.pdf"
      className={cn(
        `inline-block bg-primary font-normal tracking-wide lg:text-lg xl:text-[21px] text-white leading-8 rounded-[5px] px-3 xl:px-5 py-1 xl:py-3 ${className}`
      )}
      download
    >
      Download CV
    </Link>
  );
};

export default DownloadCV;
