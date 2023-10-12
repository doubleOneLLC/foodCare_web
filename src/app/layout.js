import { inter, jakarta } from "@/constant/fonts";
import "./globals.css";

export const metadata = {
  title: "foodCare",
  description:
    "Food Care merupakan situs web yang dibuat khusus untuk berdonasi makanan atau uang bagi masyarakat yang memiliki kemampuan finansial terbatas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
