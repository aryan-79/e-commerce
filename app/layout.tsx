import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { getCurrentSession } from "@/actions/auth/cookies";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ecom",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getCurrentSession();
  console.log("session: ", session);
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
