import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutProps } from "@/lib/types";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
