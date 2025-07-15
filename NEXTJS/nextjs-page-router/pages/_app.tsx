// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { Home, FileText, Mail, ShoppingCart, Lock } from 'lucide-react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="bg-blue-600 text-white px-8 py-4 shadow-md flex items-center gap-6">
        <Link href="/" className="flex items-center gap-1 hover:text-yellow-300 transition">
          <Home size={20} /> Home
        </Link>
        <Link href="/Lesson-11-Homework/blog" className="flex items-center gap-1 hover:text-yellow-300 transition">
          <FileText size={20} /> Blog
        </Link>
        <Link href="/Lesson-11-Homework/contact" className="flex items-center gap-1 hover:text-yellow-300 transition">
          <Mail size={20} /> Contact
        </Link>
        <Link href="/Lesson-11-Homework/products" className="flex items-center gap-1 hover:text-yellow-300 transition">
          <ShoppingCart size={20} /> Products
        </Link>
        <Link href="/Lesson-11-Homework/login" className="flex items-center gap-1 hover:text-yellow-300 transition">
          <Lock size={20} /> Login
        </Link>
      </nav>
      <main className="p-6">
        <Component {...pageProps} />
      </main>
    </>
  )
}
