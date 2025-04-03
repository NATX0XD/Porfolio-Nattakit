"use client";

import Navbar from "@/components/Navbar";
import "../themes/styles/globals.css";

export default function Layout({ children, title = "My Portfolio" }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content="My amazing portfolio" />
      </head>
      <body>{children}</body>
    </html>
  );
}
