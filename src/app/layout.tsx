import { type Metadata } from 'next'
import Head from 'next/head'
import { RootLayout } from '@/components/RootLayout'
import logo from '@/images/assets/SDL_Logo_float.png'
import '@/styles/tailwind.css'
import { Logo } from '@/components/Logo'

export const metadata: Metadata = {
  title: {
    template: 'Summit DevLabs - %s',
    default: 'Summit DevLabs - Home',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <Head>
        <meta property="og:image" content="@images/assets/SDL_Logo_float.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
