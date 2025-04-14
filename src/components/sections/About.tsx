"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const services = [
    {
      name: "Design",
      description: "Brand identity, UI/UX, print & digital assets",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      delay: 0.1,
    },
    {
      name: "Development",
      description: "Web, mobile & custom applications",
      iconColor: "text-secondary",
      bgColor: "bg-secondary/10",
      delay: 0.2,
    },
    {
      name: "Marketing",
      description: "Strategy, social media & content creation",
      iconColor: "text-accent",
      bgColor: "bg-accent/10",
      delay: 0.3,
    },
    {
      name: "Growth",
      description: "SEO, analytics & business strategy",
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-visible" id="about">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-2xl">01.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About{" "}
              <span className="gradient-text bg-gradient-to-r from-primary to-accent">
                innervate.agency
              </span>
            </h2>
          </div>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text bg-gradient-to-r from-primary to-accent">
                We craft digital experiences that captivate and convert
              </h3>
              <div className="space-y-6 text-text-secondary">
                <p>
                  Innervate is a full-service creative agency based in Boise,
                  Idaho. We blend technology, design, and strategic marketing to
                  help brands stand out in today&apos;s digital landscape.
                </p>
                <p>
                  Our{" "}
                  <span className="gradient-text bg-gradient-to-r from-primary to-accent font-semibold">
                    naturewave
                  </span>{" "}
                  aesthetic draws inspiration from Idaho&apos;s breathtaking
                  landscapes, combining organic elements with digital artistry
                  to create experiences that feel both futuristic and naturally
                  inviting.
                </p>
                <p>
                  Whether you&apos;re a startup looking to make your mark or an
                  established brand seeking reinvention, we&apos;re here to help
                  you grow and evolve.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                {/* Apply spinning gradient border effect */}
                 <Link
                    href="/contact"
                    className="group relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-gradient-to-r from-primary via-accent to-secondary" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-6 py-3 text-sm font-medium text-primary backdrop-blur-3xl transition-all duration-300 group-hover:bg-background/80 group-hover:text-primary/80">
                       <span>Start your project</span>
                       <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                         <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </span>
                  </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-right mb-8"
            >
              <h3 className="text-xl font-semibold gradient-text bg-gradient-to-r from-secondary to-neon-blue">
                Comprehensive marketing solutions
                <br />
                tailored to your unique vision
              </h3>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: service.delay }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg glass hover:border-card-border/30 transition-all duration-300"
                >
                  <div
                    className={`mb-4 w-10 h-10 rounded-full flex items-center justify-center ${service.bgColor}`}
                  >
                    <span className={`text-xl ${service.iconColor}`}>✦</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-text-primary">
                    {service.name}
                  </h4>
                  <p className="text-sm text-text-secondary">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
