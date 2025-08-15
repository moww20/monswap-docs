import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "MONSWAP Docs",
  description: "A premium, high‑performance decentralized exchange for the Monad ecosystem.",
  metadataBase: new URL("https://docs.monswap.app"),
  icons: {
    icon: "/mon-2.svg",
    shortcut: "/mon-2.svg",
    apple: "/mon-2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans`}>
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
