import './globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Next.js Multi Page App',
  description: 'A basic multi-page app using App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: 10, backgroundColor: '#0070f3', color: 'white' }}>
          <Link href="/" style={linkStyle}>Home</Link> |{" "}
          <Link href="/blog" style={linkStyle}>Blog</Link> |{" "}
          <Link href="/contact" style={linkStyle}>Contact</Link> |{" "}
          <Link href="/products" style={linkStyle}>Products</Link> |{" "}
          <Link href="/login" style={linkStyle}>Login</Link>
        </nav>
        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  );
}

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
};
