import { type Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'
import '@/styles/tailwind.css'
import logo from '@/images/assets/SDL_Logo_float.png'

export const metadata: Metadata = {
  title: {
    template: 'Summit DevLabs - %s',
    default: 'Summit DevLabs - Home',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <meta property="og:title" content="Summit DevLabs - Home" />
        <meta property="og:description" content="Welcome to Summit DevLabs" />
        <meta property="og:image" content={logo.src} />
        <meta property="og:url" content="https://summitdevlabs.com" />
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
