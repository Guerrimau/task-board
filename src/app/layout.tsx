import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import { Navbar, Siderbar } from "@/components/ui";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Board",
  description:
    'Elevate your work management and boost development efficiency. Keep tabs on your tasks and seamlessly track their progress through different states like "to do," "in progress," and beyond.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={roboto.className}>
          <Navbar />
          <Siderbar />
          <main
            style={{
              flex: 1,
              padding: "20px",
              overflow: "auto",
            }}
          >
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
