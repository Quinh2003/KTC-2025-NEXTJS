// Lession 11

// import './globals.css';
// import Link from 'next/link';
// import React from 'react';

// export const metadata = {
//   title: 'Next.js Multi Page App',
//   description: 'A basic multi-page app using App Router',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <nav style={{ padding: 10, backgroundColor: '#0070f3', color: 'white' }}>
//           <Link href="/" style={linkStyle}>Home</Link> |{" "}
//           <Link href="/blog" style={linkStyle}>Blog</Link> |{" "}
//           <Link href="/contact" style={linkStyle}>Contact</Link> |{" "}
//           <Link href="/products" style={linkStyle}>Products</Link> |{" "}
//           <Link href="/login" style={linkStyle}>Login</Link>
//         </nav>
//         <main style={{ padding: 20 }}>{children}</main>
//       </body>
//     </html>
//   );
// }

// const linkStyle: React.CSSProperties = {
//   color: 'white',
//   textDecoration: 'none',
// };

//Lesion 12

import "./globals.css";
import Link from "next/link";
import { Home, Globe, Clock, RefreshCcwDot, Monitor } from "lucide-react";

export const metadata = {
  title: "Next.js Rendering Demo",
  description: "Demo 4 hình thức render trong Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 min-h-screen">
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Afternoon Practices
                </h1>
              </div>
              <div className="flex gap-2">
                <NavItem href="/" icon={<Home size={18} />} label="Trang chủ" />
                <NavItem
                  href="/task-ssr"
                  icon={<Globe size={18} />}
                  label="SSR"
                />
                <NavItem
                  href="/task-ssg"
                  icon={<Clock size={18} />}
                  label="SSG"
                />
                <NavItem
                  href="/task-isr"
                  icon={<RefreshCcwDot size={18} />}
                  label="ISR"
                />
                <NavItem
                  href="/task-csr"
                  icon={<Monitor size={18} />}
                  label="CSR"
                />
              </div>
            </div>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600 hover:scale-105"
    >
      {icon}
      {label}
    </Link>
  );
}
