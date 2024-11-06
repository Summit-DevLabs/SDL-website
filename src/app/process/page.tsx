import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-primary-hero sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by thoroughly understanding your business, your goals, and your challenges. 
          Through in-depth discussions and strategic analysis, we get to the core of what drives 
          your business and identify the specific needs of your project. This discovery phase 
          allows us to craft a tailored roadmap, ensuring that every step we take aligns seamlessly 
          with your objectives and provides a clear path to achieving them — with a budget that works for you.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Goal-Setting Sessions</TagListItem>
        <TagListItem>Business Analysis</TagListItem>
        <TagListItem>Project Scoping</TagListItem>
        <TagListItem>Timeline & Budget Alignment</TagListItem>
        <TagListItem>Technical Requirements Assessment</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With insights from the discovery phase, we create a clear and structured 
          roadmap to guide the development process. Our team works diligently to bring 
          your vision to life, focusing on building a robust, scalable solution that 
          meets your specific needs.
        </p>
        <p>
          Our developers handle both the technical work and 
          client communication, ensuring you’re always connected with the people 
          building your project. This hands-on approach keeps communication direct and 
          transparent, allowing us to respond quickly to feedback and provide real-time 
          updates. By keeping our approach streamlined and focused, we work to deliver 
          a high-quality product that aligns with your goals.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Custom Code Development</TagListItem>
        <TagListItem>User Interface (UI) Implementation</TagListItem>
        <TagListItem>API Integration & Development</TagListItem>
        <TagListItem>Progress Updates</TagListItem>
        <TagListItem>Quality Assurance & Testing</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Delivery" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the conclusion of the Build phase, we review each project 
          to ensure it aligns with the latest requirements and client feedback. 
          This allows us to make any necessary adjustments to enhance the final product. 
          Our team focuses on delivering a polished solution, dedicating the final days 
          to rigorous testing and refinement to ensure everything is functioning as 
          intended. We ensure a fully operational site at launch, and we're committed to 
          providing ongoing support and updates to keep your site performing at its best.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Final Review</TagListItem>
        <TagListItem>Launch Preparation</TagListItem>
        <TagListItem>Deployment</TagListItem>
        <TagListItem>Post-Launch Support</TagListItem>
        <TagListItem>Feedback Integration</TagListItem>
      </TagList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Trustworthy Solutions in a Dynamic World"
      >
        <p>
          At Summit DevLabs, we cultivate a culture of trust by being 
          adaptable to the changing landscape of technology while honoring 
          the proven strategies that serve our clients best. Our commitment 
          to quality and reliability is at the heart of everything we do.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We take pride in our attention to detail, ensuring that every element 
            of your project is aligned with your vision, from incorporating your 
            branding to perfecting the color palette.
          </GridListItem>
          <GridListItem title="Efficient">
            Our team is dedicated to meeting deadlines without compromising quality, 
            utilizing our extensive experience to streamline processes and deliver 
            timely results.
          </GridListItem>
          <GridListItem title="Adaptable">
            We recognize that each business is unique, and we excel at customizing 
            our solutions to fit those specific requirements, providing flexibility 
            without losing sight of your objectives.
          </GridListItem>
          <GridListItem title="Honest">
            We believe in transparent communication throughout our process, ensuring 
            our clients are well-informed and engaged every step of the way.
          </GridListItem>
          <GridListItem title="Loyal">
            We prioritize building long-term relationships with our clients, fostering 
            trust and collaboration that extend well beyond project completion.
          </GridListItem>
          <GridListItem title="Innovative">
            We embrace the ever-evolving technological landscape, consistently exploring 
            and integrating the latest tools and methodologies to enhance our solutions 
            for your success.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and tailoring each solution to meet our clients’ unique needs. 
          Our approach is centered on understanding your goals, adapting our strategies, 
          and delivering a product that’s built from the ground up to fit your vision. 
          Every project we take on is a new opportunity to create something exceptional.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
