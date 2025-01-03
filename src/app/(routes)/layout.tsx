import Footer from "../(routes)/components/Footer";
import Nav from "../(routes)/components/Nav";
import { ShopProvider } from "../context/ShopContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <ShopProvider>{children}</ShopProvider>
        <Footer />
      </body>
    </html>
  );
}
