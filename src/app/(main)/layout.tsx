import { Footer, Navbar } from "@/components";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="h-full w-full">{children}</main>
      <Footer />
    </>
  );
}
