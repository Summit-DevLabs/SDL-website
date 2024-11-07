import { type Metadata } from 'next'
import { RootLayout } from '@/components/RootLayout'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Summit DevLabs - %s',
    default: 'Summit DevLabs - Home',
  },
  openGraph: {
    images: [
      {
        url: '/images/assets/SDL_Logo_float.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
