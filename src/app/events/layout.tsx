import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Private Dining",
  description: "Host your next event at The ANNEX. Private dining, gaming lounge, and full-service catering for corporate events, weddings, parties, and celebrations.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
