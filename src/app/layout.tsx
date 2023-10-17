import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import { Box } from "@mui/material";
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
          <Box sx={{ flexFlow: 1 }}>
            <Navbar />
            <Siderbar />
            <Box sx={{ padding: "10px 20px" }}>
              {children}
            </Box>
          </Box>
        </body>
      </Providers>
    </html>
  );
}
