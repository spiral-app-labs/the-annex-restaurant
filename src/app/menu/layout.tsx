import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our full menu — American, Greek & Mediterranean dishes made from scratch. Small plates, steaks, seafood, pasta, and signature cocktails at The ANNEX.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
