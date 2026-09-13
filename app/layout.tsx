import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Qobo1Live - Live Streaming, Voice Party Rooms, PK Battles & Creator Monetization",
  description:
    "Qobo1Live is the ultimate next-gen live streaming platform. Stream live video, host 9-seat audio voice party rooms, compete in PK battles, connect 1-on-1, and monetize your content with agency support.",
  keywords: [
    "Qobo1Live",
    "live streaming",
    "voice rooms",
    "PK battle",
    "1-on-1 video call",
    "agency portal",
    "creator earnings",
    "virtual gifts",
    "mobile live app",
  ],
  icons: {
    icon: "/images/logo-dummy.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
