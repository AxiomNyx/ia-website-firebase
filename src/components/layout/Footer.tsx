"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-24 overflow-hidden">
      {/* Windows 11 Mica-inspired glass effect background */}
      <div className="absolute inset-0 -z-10">
        {/* Dark backdrop layer */}
        <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-xl" />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Mesh gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-soft-light">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-brand-magenta/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      {/* Grid pattern overlay - refined */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(36,211,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,211,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10 opacity-30"></div>

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Logo and visual element */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <Link
              href="/"
              className="text-2xl tracking-wide font-mono relative overflow-hidden inline-block"
            >
              <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-brand-magenta via-neon-blue to-brand-yellow">
                innervate
              </span>
              <span className="text-white font-light">.agency</span>
            </Link>
            {/* Added subtle animation */}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-blue to-brand-magenta origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>



            {/* Decorative element */}
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>
        </div>

        {/* Main grid with enhanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
                Our Philosophy
              </h3>
              <p className="text-gray-400 text-sm max-w-md mb-6">
                We believe in clear, honest communication and marketing that
                actually connects. We offer full-stack marketing solutions with a naturewave aesthetic, inspired by the stunning
                landscapes of Southern Idaho. We blend modern design with
                organic elements.
              </p>

              {/* Enhanced contact info */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center text-sm text-gray-400">
                  <svg
                    className="w-4 h-4 mr-2 text-neon-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:hello@innervate.agency"
                    className="hover:text-neon-blue transition-colors duration-200"
                  >
                    hello@innervate.agency
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg
                    className="w-4 h-4 mr-2 text-brand-magenta"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(208) 555-1234</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <svg
                    className="w-4 h-4 mr-2 text-brand-yellow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Boise, Idaho</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links columns with Windows 11 style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05]">
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-6">
                Site Map
              </h3>
              <ul className="space-y-2.5">
                {["Services", "Portfolio", "About", "Contact", "Blog"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm relative group flex items-center"
                      >
                        <span className="absolute -left-4 w-0 h-px bg-gradient-to-r from-neon-blue to-brand-magenta group-hover:w-6 transition-all duration-200"></span>
                        <span className="group-hover:translate-x-5 transition-transform duration-200 block">
                          {item === "Portfolio" ? "Work" : item} {/* Changed Portfolio to Work */}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </motion.div>

          {/* Resources column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Adjusted delay
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <div className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05]">
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-2.5">
                {["FAQ", "Privacy", "Terms", "Careers"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm relative group"
                    > 
                      <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-brand-magenta group-hover:w-3 transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social column with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Adjusted delay
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.05]">
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
                Connect
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    name: "Twitter",
                    href: "#",
                    icon: "M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z",
                    color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
                  },
                  {
                    name: "Instagram",
                    href: "#",
                    icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                    color: "bg-[#E1306C]/10 text-[#E1306C]",
                  },
                  {
                    name: "LinkedIn",
                    href: "#",
                    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                    color: "bg-[#0077B5]/10 text-[#0077B5]",
                  },
                  {
                    name: "GitHub",
                    href: "#",
                    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                    color: "bg-gray-200/10 text-gray-200",
                  },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`p-2.5 rounded-lg ${item.color} flex items-center justify-center hover:bg-white/10 transition-colors duration-200 group`}
                    aria-label={item.name}
                  >
                    <svg
                      className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d={item.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} innervate.agency{" "}
              <span className="mx-2">•</span> All rights reserved
            </p>

            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-gray-500 hover:text-gray-300 transition-colors text-xs"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
