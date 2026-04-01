import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The ANNEX Restaurant & Lounge — hours, location, phone, email, and directions. 2104 W Algonquin Rd, Lake in the Hills, IL 60156.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
