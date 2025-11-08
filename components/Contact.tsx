'use client'

import React, { JSX, useMemo, useState } from 'react'

type Status = { state: 'idle' | 'submitting' | 'success' | 'error'; message?: string }
type FormDataT = { name: string; email: string; projectType: string; budget: string; message?: string }

const inputBase =
  'mt-2 block w-full rounded-xl border border-black/15 bg-white px-3.5 py-3 text-sm text-black outline-none transition ' +
  'placeholder:text-neutral-400 focus:border-black/40 focus:ring-2 focus:ring-black/10'

export default function Contact(): JSX.Element {
  const [status, setStatus] = useState<Status>({ state: 'idle' })
  const [errors, setErrors] = useState<Partial<Record<keyof FormDataT, string>>>({})

  const budgets = useMemo(
    () => ['< $1,000', '$1,000 – $3,000', '$3,000 – $10,000', '$10,000+'],
    []
  )
  const types = useMemo(
    () => ['Website', 'Web App', 'UI/UX Design', 'E‑commerce', 'Consultation'],
    []
  )

  function validate(d: FormDataT) {
    const e: Partial<Record<keyof FormDataT, string>> = {}
    if (!d.name?.trim()) e.name = 'Required'
    if (!d.email?.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = 'Invalid email'
    if (!d.projectType) e.projectType = 'Select a type'
    if (!d.budget) e.budget = 'Select a budget'
    return e
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as unknown as FormDataT
    const e = validate(data)
    setErrors(e)
    if (Object.keys(e).length) return

    try {
      setStatus({ state: 'submitting' })
      // TODO: replace with your API/Email endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus({ state: 'success', message: 'Thanks! I will get back to you shortly.' })
      form.reset()
    } catch {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section
    id='contact'
    className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto w-[92%] sm:w-[88%] max-w-5xl">
        {/* Title */}
        <header className="mb-8 text-center">
          <h1 className="font-kufam text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black">
            Let’s work together
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Fill out the form and I’ll reach out within 24–48 hours.
          </p>
        </header>

        {/* Glass card */}
        <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.06)]">
          <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-7 md:p-8">
            {/* Honeypot */}
            <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  Name
                </label>
                <input id="name" name="name" placeholder="John Doe" autoComplete="name" className={inputBase} />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  autoComplete="email"
                  className={inputBase}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              {/* Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-black">
                  Type of project
                </label>
                <select id="projectType" name="projectType" defaultValue="" className={inputBase}>
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {types.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                {errors.projectType && <p className="mt-1 text-xs text-red-600">{errors.projectType}</p>}
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-black">
                  Budget
                </label>
                <select id="budget" name="budget" defaultValue="" className={inputBase}>
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                {errors.budget && <p className="mt-1 text-xs text-red-600">{errors.budget}</p>}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-black">
                  Project details (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your goals, timeline, and any references."
                  className={inputBase}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-neutral-500">
                By submitting, you agree to be contacted about your project.
              </p>
              <button
                type="submit"
                disabled={status.state === 'submitting'}
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-black
                           bg-lime-300 hover:bg-lime-300/90 transition-colors ring-1 ring-black shadow-[0_2px_0_#000]
                           disabled:opacity-60"
              >
                {status.state === 'submitting' ? 'Sending…' : 'Send Request'}
              </button>
            </div>

            {status.state !== 'idle' && status.message && (
              <p
                role="status"
                className={`mt-3 text-sm ${status.state === 'success' ? 'text-green-600' : 'text-red-600'}`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}