import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Mysterious from "@/components/Mysterious";

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
      </head>

      <body >
       <Navbar />
       <Mysterious/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
