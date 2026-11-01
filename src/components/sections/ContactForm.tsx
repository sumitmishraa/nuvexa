"use client";

import { useLayoutEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "motion/react";
import { enquiryTypes, site } from "@/content/site";
import { EASE_OUT_EXPO, cn } from "@/lib/cn";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please tell us your name."),
  email: z.email("Please provide a valid email address."),
  organization: z.string().trim().optional(),
  inquiry: z.enum(enquiryTypes, { error: "Please choose what your enquiry is about." }),
  message: z.string().trim().min(10, "A few more words would help us respond well."),
  consent: z.literal(true, { error: "Please confirm consent so we can reply." }),
});

type FormValues = z.input<typeof schema>;

function Field({
  id,
  label,
  error,
  children,
  optional,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div className="group relative">
      <label htmlFor={id} className="eyebrow mb-3 flex justify-between text-ink-muted">
        <span>{label}</span>
        {optional ? <span className="normal-case tracking-normal opacity-60">Optional</span> : null}
      </label>
      {children}
      <AnimatePresence>
        {error ? (
          <motion.p
            id={`${id}-error`}
            role="alert"
            className="mt-2 text-[0.82rem] text-clay"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  "w-full border-0 border-b border-ink/20 bg-transparent px-0 pb-3 pt-1 text-[1.05rem] text-ink placeholder:text-ink/30 transition-colors focus:border-brass focus:outline-none focus-visible:outline-none";

/**
 * UI-only enquiry form. Validation is real; delivery is not connected yet,
 * so the success state says so plainly. TODO: connect to an email/CRM endpoint before launch.
 */
export function ContactForm() {
  const [sentName, setSentName] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { organization: "" } });

  // Clear a stale success state if the page is hidden by a navigation and shown again.
  useLayoutEffect(() => () => setSentName(null), []);

  const selected = useWatch({ control, name: "inquiry" });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    setSentName(values.fullName.split(" ")[0]);
    reset();
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sentName ? (
          <motion.div
            key="sent"
            role="status"
            className="flex min-h-[32rem] flex-col items-start justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          >
            <svg viewBox="0 0 52 52" className="mb-8 h-14 w-14 text-brass" aria-hidden="true">
              <motion.circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
              <motion.path d="M16 27 l7 7 l14 -16" fill="none" stroke="currentColor" strokeWidth="1.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.6 }} />
            </svg>
            <h3 className="display-lg mb-5">Thank you, {sentName}.</h3>
            <p className="lede max-w-[46ch] text-ink-muted">
              This is a preview of the new site — online form delivery will be connected before launch. In the meantime, please write to us directly at{" "}
              <a className="text-ink underline decoration-brass underline-offset-4" href={`mailto:${site.emails.general}`}>
                {site.emails.general}
              </a>
              .
            </p>
            <button type="button" onClick={() => setSentName(null)} className="eyebrow mt-10 text-brass hover:text-ink">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <fieldset>
              <legend className="eyebrow mb-4 text-ink-muted">What is your enquiry about?</legend>
              <div className="flex flex-wrap gap-2.5">
                {enquiryTypes.map((type) => (
                  <label
                    key={type}
                    className={cn(
                      "cursor-pointer rounded-full border px-4 py-2.5 text-[0.85rem] transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-brass",
                      selected === type ? "border-ink bg-ink text-ivory" : "border-ink/20 hover:border-ink/60",
                    )}
                  >
                    <input type="radio" value={type} className="sr-only" {...register("inquiry")} />
                    {type}
                  </label>
                ))}
              </div>
              {errors.inquiry ? (
                <p role="alert" className="mt-3 text-[0.82rem] text-clay">
                  {errors.inquiry.message}
                </p>
              ) : null}
            </fieldset>

            <div className="grid gap-10 md:grid-cols-2">
              <Field id="fullName" label="Full name" error={errors.fullName?.message}>
                <input
                  id="fullName"
                  autoComplete="name"
                  className={inputClass}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  {...register("fullName")}
                />
              </Field>
              <Field id="email" label="Email address" error={errors.email?.message}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email")}
                />
              </Field>
            </div>
            <Field id="organization" label="Organisation" optional>
              <input id="organization" autoComplete="organization" className={inputClass} {...register("organization")} />
            </Field>
            <Field id="message" label="Message" error={errors.message?.message}>
              <textarea
                id="message"
                rows={5}
                className={cn(inputClass, "resize-none")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
              />
            </Field>

            <div>
              <label className="flex cursor-pointer items-start gap-4 text-[0.9rem] text-ink-muted">
                <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#b08a55]" {...register("consent")} />
                <span>
                  I consent to Nuvexa storing and processing my personal data in accordance with its{" "}
                  <a href="/legal/privacy" className="text-ink underline decoration-brass underline-offset-4">
                    privacy policy
                  </a>
                  .
                </span>
              </label>
              {errors.consent ? (
                <p role="alert" className="mt-2 text-[0.82rem] text-clay">
                  {errors.consent.message}
                </p>
              ) : null}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex h-14 items-center gap-4 rounded-full bg-ink px-8 text-[0.85rem] font-medium tracking-[0.06em] text-ivory transition-colors hover:bg-ink-soft disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                <span aria-hidden="true" className="h-px w-8 bg-brass transition-all duration-500 group-hover:w-12" />
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
