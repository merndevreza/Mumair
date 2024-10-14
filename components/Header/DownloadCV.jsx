import { cn } from "@/lib/utils";
import Link from "next/link";
import ButtonPrimary from "../ButtonPrimary";

const DownloadCV = ({ className }) => {
  return (
    <Link className={className} href="/Resume.pdf" download>
      <ButtonPrimary>Download CV</ButtonPrimary>
    </Link>
  );
};

export default DownloadCV;
