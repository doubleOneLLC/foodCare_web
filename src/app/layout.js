import { inter, jakarta } from "@/constant/fonts";
import "./globals.css";
import { AuthProviders } from "@/context/SessionProvider.context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "foodCare",
  description:
    "Food Care merupakan situs web yang dibuat khusus untuk berdonasi makanan atau uang bagi masyarakat yang memiliki kemampuan finansial terbatas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <AuthProviders>
        <body className={jakarta.className}>{children}</body>
      </AuthProviders>
    </html>
  );
}
