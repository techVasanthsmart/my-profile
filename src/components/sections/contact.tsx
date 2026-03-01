"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import { gsap } from "@/lib/useGSAP";
import type { ReactNode } from "react";

function ContactCard({
  title,
  description,
  children,
  delay = 0,
}: {
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Card variant="bordered" delay={delay} hover={true}>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

const quickContactItems = [
  {
    title: "Send Email",
    description: "Quick and direct communication",
    href: () => `mailto:${siteConfig.email}`,
    cta: "Send Email",
    external: false,
  },
  ...("whatsapp" in siteConfig && siteConfig.whatsapp
    ? [
        {
          title: "WhatsApp",
          description: "Instant messaging for quick queries",
          href: () => siteConfig.whatsapp as string,
          cta: "Message",
          external: true,
        },
      ]
    : []),
  {
    title: "LinkedIn",
    description: "Professional networking and updates",
    href: () => siteConfig.linkedIn,
    cta: "Connect",
    external: true,
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Set up a smooth scrolling foundation timeline for the entire wrapper
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Heading animation
      tl.from(".contact-heading", {
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power2.out",
      })
      // Target the .feature-card elements for stagger and fade in
      .fromTo(
        ".feature-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
        },
        "-=0.4"
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative scroll-mt-24 bg-slate-50/50 px-6 py-24 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <div className="contact-heading mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Got a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <ContactCard
              title="Get In Touch"
              description="Reach out for collaborations, contracts, or a quick chat."
              delay={0}
            >
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Location
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">{siteConfig.Location}</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Response Time
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">Within 24 hours</span>
                </li>
              </ul>
              <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Connect With Me
                </p>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={siteConfig.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </ContactCard>
          </div>

          <div className="space-y-4 self-start">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Quick Contact
            </h3>
            {quickContactItems.map((item, i) => (
              <ContactCard
                key={item.title}
                title={item.title}
                description={item.description}
                delay={0.05 * (i + 1)}
              >
                <a
                  href={item.href()}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  {item.cta}
                </a>
              </ContactCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
