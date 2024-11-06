import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import  CaseStudies  from '@/components/CaseStudies'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import MissionStatement from '@/components/MissionStatement'

const clients = [
  ['Trestle Glen Vineyards', logoPhobiaLight],
  ['The Aligned Clinic', logoPhobiaLight],
  ['Michigan Memorial Funeral Home', logoUnseal],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Here are some of the clients with whome we’ve had the pleasure of working.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We offer a wide range of services to meet your needs."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our team is dedicated to providing innovative solutions tailored to your unique business objectives. Explore how we can support your growth.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Development">
              Our expertise in web development ensures that your website not only looks stunning but is also optimized for performance and user experience. We work with various technologies to build responsive and dynamic websites.
            </ListItem>
            <ListItem title="E-commerce Solutions">
              Unlock the potential of online sales with our custom e-commerce development services. We create seamless and secure online shopping experiences tailored to your business needs, leveraging leading platforms like Shopify.
            </ListItem>
            <ListItem title="Digital Marketing">
              Enhance your online presence with our comprehensive digital marketing strategies. Our team specializes in SEO, content marketing, and modern design to help your business reach its target audience effectively.
            </ListItem>
            <ListItem title="Application Development">
              From concept to deployment, we develop mobile and web applications using cutting-edge technologies. Our goal is to build intuitive and engaging applications that provide real value to your users.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Client-focused development studio based in <span className="text-primary-hero">Pittsburgh</span>.
          </h1>
          <p className="mt-6 text-xl text-neutral-600 mb-24">
            We are a software solutions company that specializes in web and ecommerce development. We are a team of developers who are dedicated to creating the best possible product for our clients.
          </p>
        </FadeIn>
      </Container>

      {/* uncomment this section when we get more logos */}
      {/* <Clients /> */}

      <CaseStudies caseStudies={caseStudies} />

      <MissionStatement />

      <Services />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40 text-primary-hero"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <ContactSection />
    </>
  )
}
