import { Footer, Navbar } from "@/components";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main className="h-auto w-full">{children}</main>
      <Footer />
    </div>
  );
}
