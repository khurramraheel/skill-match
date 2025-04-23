"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "@/components/Navbar";
// import { GeistSans } from 'geist/font/sans';



import Script from "next/script";


// import Footer from "@/components/Footer";
// import Mysterious from "@/components/Mysterious";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { SessionProvider } from "next-auth/react";
import LayoutWrapper from "./LayoutWrapper";
// import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {
  


  return (
    <html lang="en">

      <head>
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100..900&display=swap"
          rel="stylesheet"
        />


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js" integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq" crossOrigin="anonymous"></script>
      </head>

      

      <body >
    
      <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6808b361b98743190e25c53e/1ipgvpdnk';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />


       <SessionProvider>

       <Provider store={store}>
        
       <LayoutWrapper> {children}</LayoutWrapper>
        </Provider>
       </SessionProvider>
       


      </body>
    </html>
  );
}
