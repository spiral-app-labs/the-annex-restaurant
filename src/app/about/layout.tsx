import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Established in 2024, The ANNEX brings American, Greek & Mediterranean cuisine to Lake in the Hills, IL. Discover our story, philosophy, and what makes us unique.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
