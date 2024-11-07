import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageShawnWilson from '@/images/team/shawn-wilson.jpg'
import imageDavidCerniglia from '@/images/team/david-cerniglia.jpg'
import imageJesseWalls from '@/images/team/jesse-walls.jpg'
import imageJeremiahWilliams from '@/images/team/jeremiah-williams.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Build with integrity, communicate with clarity, and trust in the journey."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Transparent Communication" invert>
            <br></br>
            We believe that open, honest dialogue is key to every successful project.
            Our team values clear and consistent communication, ensuring that our clients are informed
            and engaged at every step of the process.
          </GridListItem>
          <GridListItem title="Quality with Precision" invert>
            <br></br>
            Every line of code matters, and we’re dedicated to getting it right the first time.
            We approach each project with a meticulous focus on quality, aiming to deliver solutions
            that meet the highest standards in functionality and design.
          </GridListItem>
          <GridListItem title="Trust and Integrity" invert>
            <br></br>
            We’re committed to building trust through transparency and accountability.
            Integrity is the foundation of our team’s work — we’re dedicated to delivering
            on our promises and being upfront about challenges along the way.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'David Cerniglia',
        title: 'Senior Software Developer',
        image: { src: imageDavidCerniglia },
        founder: true,
      },
      {
        name: 'Shawn Wilson',
        title: 'Senior Software Developer',
        image: { src: imageShawnWilson },
        founder: true,
      },
      {
        name: 'Jesse Walls',
        title: 'Dev Ops Engineer',
        image: { src: imageJesseWalls },
        founder: true,
      },
      {
        name: 'Jeremiah Williams',
        title: 'Front-End Developer',
        image: { src: imageJeremiahWilliams },
        founder: true,
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-primary-hero">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-3 text-sm text-white">
                              {person.title}
                            </p>
                            <p className="text-sm text-white">
                              {person?.founder ? 'Founder' : ''}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title={
          <>
            Driven by <span className='text-primary-hero'>Purpose</span>, <span className='text-primary-hero'>Powered</span> by Collaboration
          </>
        }>
        <p>
          Our strength lies in understanding our clients’ goals deeply, crafting each solution
          through a collaborative process that keeps their vision at the forefront of every decision.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Founded by four <span className='text-primary-hero font-semibold'>friends</span> with a love for <span className='text-primary-hero font-semibold'>coding</span> and collaboration, 
            Summit <span className='text-primary-hero'>Dev</span>Labs is all about close partnerships and <span className='text-primary-hero font-semibold'>creative</span> problem-solving. 
            We believe the best solutions come from truly understanding our clients’ <span className='text-primary-hero font-semibold'>goals </span> 
            and working together to bring them to <span className='text-primary-hero font-semibold'>life</span>. Our <span className='text-primary-hero font-semibold'>journey</span> began with a shared <span className='text-primary-hero font-semibold'>passion</span>, 
            and it thrives through the unique challenges and successes of our <span className='text-primary-hero font-semibold'>clients</span>.
          </p>
          <p>
            At Summit <span className='text-primary-hero'>Dev</span>Labs, you’re not just hiring developers — 
            you’re gaining a <span className='text-primary-hero font-semibold'>team</span> of dedicated <span className='text-primary-hero font-semibold'>partners</span>, here to help you reach your digital <span className='text-primary-hero font-semibold'>summit</span>.
          </p>
        </div>
      </PageIntro>

      <Culture />

      <Team />

      <ContactSection />
    </>
  )
}
