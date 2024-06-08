import type { Metadata } from "next";
import "@/styles/main.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Rohit Kushwaha",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className="bg-gray-950 w-full h-screen text-white">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
