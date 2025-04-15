"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaAward, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";

export default function About() {

  const placeholderImageUrl = "https://source.unsplash.com/random/1080x720/?office,team,collaboration";

  const stats = [
    { value: "95%", label: "Client Satisfaction", icon: FaAward, delay: 0.1 },
    { value: "150%", label: "Average ROI Growth", icon: FaChartLine, delay: 0.2 },
    { value: "50+", label: "Successful Projects", icon: FaLightbulb, delay: 0.3 },
    { value: "10+", label: "Years Combined Experience", icon: FaUsers, delay: 0.4 },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden" id="about">
      <div className="container-wide relative z-10">
        {/* Section Header - Updated with new Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-baseline gap-3 mb-4">
            <span className="text-primary font-mono text-4xl md:text-5xl font-bold">01.\</span>
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
              Who We Are
            </h2>
          </div>
          {/* Updated Subtitle */} 
          <p className="text-lg md:text-xl text-muted-foreground font-sans mb-6">
            Innervative Digital Spark. Human Connection.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent"></div>
        </motion.div>

        {/* Rest of the section content (unchanged) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
           {/* Left Column: Image + Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image Container */}
            <div
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={placeholderImageUrl}
                alt="Innervate Agency Team or Office Collaboration"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
            </div>

            {/* Text Content Block */}
            <div>
              <h3 className="text-3xl font-semibold mb-6 font-mono text-foreground">
                 Crafting Digital Experiences with Vision.
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg">
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
              </div>
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-10"
               >
                <Link
                  href="/contact"
                  className="group relative inline-flex h-12 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                >
                  <span className="absolute inset-[-1000%] animate-spin duration-[3s] bg-gradient-to-r from-primary via-accent to-secondary" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[6px] bg-background px-6 text-sm font-medium text-primary transition-all duration-300 group-hover:bg-background/80 group-hover:text-primary/90">
                    <span>Start your project</span>
                    <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
               </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
             className="lg:pl-8"
          >
             <h4 className="text-2xl font-semibold mb-8 font-mono text-foreground">
                Digital innovators with a passion for excellence.
             </h4>

             <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: stat.delay }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-lg shadow-lg text-center hover:border-primary/30 border border-transparent transition-colors"
                    >
                        <p className="text-4xl font-bold font-mono text-primary mb-2">
                            {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
