import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

const faqs = [
  {
    question: "How do you hire us?",
    answer:
      "You can hire us by contacting us through our contact form or by sending us an email. We will get back to you as soon as possible!",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services including custom website development, Shopify website solutions, e-commerce development, and website maintenance.",
  },
  {
    question: "How long does it take to develop a custom website?",
    answer:
      "The timeline for developing a custom website varies depending on the complexity and requirements of the project.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your website remains up-to-date, secure, and performs optimally.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely! We provide SEO and digital marketing services to help improve your website's visibility, drive traffic, and increase conversions.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing structure is based on the scope and complexity of the project. We offer competitive rates and provide detailed quotes after understanding your specific requirements.",
  },
]

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about our services and company.',
}

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
