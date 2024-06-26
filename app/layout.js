import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../app/components/nav/NavBar/page"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Financez",
  description: "Accounting Payroll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
