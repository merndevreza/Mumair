import { ThemeProvider } from "./providers/ThemeProvider";
import "./globals.css";   
import {poppins} from "./fonts" 
import Header from "@/components/Header/Header";
 
export const metadata = {
  title: "Mumair",
  description: "Portfolio of Mumair",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-primary`}
      >
         <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem 
          disableTransitionOnChange
        >
          <Header/>
           {children}
        </ThemeProvider>  
      </body>
    </html>
  );
}
