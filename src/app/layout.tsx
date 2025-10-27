import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // ✅ Import Footer
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Medical Institute",
  description: "Healthcare Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* ✅ Footer added */}
      </body>
    </html>
  );
}
