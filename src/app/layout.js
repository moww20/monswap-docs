import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "monswap-docs",
  description: "A premium, high‑performance decentralized exchange for the Monad ecosystem.",
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
