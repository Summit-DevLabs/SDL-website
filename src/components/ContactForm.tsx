"use client";
import { useId } from 'react'
import React, { useState } from 'react';
import { sendToDiscord } from '@/lib/formHandler';
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import ConfirmationModal from './ConfirmationModal';

function TextInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    let id = useId()
  
    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          type="text"
          id={id}
          {...props}
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
    )
  }
  
  function RadioInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    return (
      <label className="flex gap-x-3">
        <input
          type="radio"
          {...props}
          className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        />
        <span className="text-base/6 text-neutral-950">{label}</span>
      </label>
    )
  }
  
  export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [budget, setBudget] = useState('');
    const [errors, setErrors] = useState({name: '', email: '', company: '', phone: '', message: '', budget: ''});
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const validate = () => {
      let tempErrors = { name: '', email: '', company: '', phone: '', message: '', budget: '' };
      if (!name) tempErrors.name = 'Name is required';
      if (!email) tempErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = 'Email is invalid';
      setErrors(tempErrors);
      return Object.values(tempErrors).every(x => x === '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const formData = { name, email, company, phone, message, budget };

      if (validate()) {
        try {
          await sendToDiscord(formData);
          setIsModalOpen(true);
        } catch (error) {
          alert('Failed to send information.');
        }
      }
    };
  
    return (
      <FadeIn className="lg:order-last">
        <form onSubmit={handleSubmit}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Work inquiries
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput
              label="Name"
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <TextInput
              label="Company"
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <TextInput
              label="Phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextInput
              label="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
              <fieldset>
                <legend className="text-base/6 text-neutral-500">Budget</legend>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <RadioInput
                    label="$0 – $1K"
                    name="budget"
                    value="$0 – $1K"
                    checked={budget === '$0 – $1K'}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                  <RadioInput
                    label="$1K – $5K"
                    name="budget"
                    value="$1K – $5K"
                    checked={budget === '$1K – $5K'}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                  <RadioInput
                    label="$5K – $25K"
                    name="budget"
                    value="$5K – $25K"
                    checked={budget === '$5K – $25K'}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                  <RadioInput
                    label="More than $25K"
                    name="budget"
                    value="More than $25K"
                    checked={budget === 'More than $25K'}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <Button type="submit" className="mt-10">
            Let’s work together
          </Button>
        </form>
        {isModalOpen && <ConfirmationModal onClose={() => setIsModalOpen(false)} />}
      </FadeIn>
    )
  }