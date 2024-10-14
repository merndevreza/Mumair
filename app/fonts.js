import { Poppins } from "next/font/google"; 

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
  weight:["400","500","600","700","800"]
}); 