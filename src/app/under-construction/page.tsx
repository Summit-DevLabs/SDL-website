import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import underConstruction from '@/images/under-construction.webp'

export default function UnderConstruction() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <StylizedImage
          src={underConstruction}
          sizes="(min-width: 1024px) 45rem, 45rem"
          className="justify-center lg:justify-end"
        />
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Page under construction
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          This page will be up and running soon!
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  )
}
