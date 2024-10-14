"use client";
import Image from "next/image";
import Link from "next/link";
import logoLight from "@/public/assets/logo-light.png";
import logoDark from "@/public/assets/logo-dark.png";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <Link href="/">
      <Image className="h-[40px] xl:h-[50px] 2xl:h-[66px] w-auto" src={theme === "dark" ? logoDark : logoLight} alt="Mumair Logo" />
    </Link>
  );
};

export default Logo;
