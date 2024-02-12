import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import React from "react";
import dedent from "ts-dedent";

import Footer from "~/components/footer";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

import "./globals.css";

config.autoAddCss = false;

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Purple Mortgage",
    default: "Purple Mortgage",
  },
  description: dedent`
    A mortgage company that prioritizes real human interactions. Unlike big banks, we believe in personal
    touch and understanding individual needs.
  `,
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(raleway.variable, inter.variable)}>
        <div className="drawer">
          <input
            type="checkbox"
            id="sidebar-toggle"
            className="drawer-toggle"
          />
          <div className="drawer-content flex min-h-[100svh] flex-col">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
