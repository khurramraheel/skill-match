// ✅ app/LayoutWrapper.js
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mysterious from "@/components/Mysterious";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Add all routes where you DON'T want the Navbar
  const excludedRoutes = ["/dashboard","/login","/signUp","/dashboard/findjobs","/dashboard/brse-companies"];
  const showNavbar = !excludedRoutes.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Mysterious />
      {children}
  {showNavbar &&  < Footer/>}
    </>
  );
}
