import { jakarta } from "@/constant/fonts";
import "./globals.css";
import { AuthProviders } from "@/context/SessionProvider.context";

const siteTitle = "foodCare | With food, We care";
const siteDesc =
  "Food Care merupakan situs web yang dibuat khusus untuk berdonasi makanan atau uang bagi masyarakat yang memiliki kemampuan finansial terbatas.";
const siteKey =
  "foodcare, food, donasi, makanan, donasi makanan, berlebih, makanan berlebih, zero hungry, sdgs, donasi uang";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
        <meta property="title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta name="keywords" content={siteKey} />
        <meta
          property="og:image"
          content="https://foodcare.xyzuan.my.id/assets/svgs/foodcare_logo.svg"
        />
        <meta property="og:image:alt" content="foodcare" />
        <meta property="og:url" content="https://foodcare.xyzuan.my.id/" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
      </head>
      <AuthProviders>
        <body className={jakarta.className}>{children}</body>
      </AuthProviders>
    </html>
  );
}
