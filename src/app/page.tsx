"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  ArrowRight,

  Menu,
  X,
  ChevronRight,
  
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import SolutionsSection from "@/components/SolutionsSection"
import InteractiveDemo from "@/components/InteractiveDemo"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  // Parallax effect for hero section

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mouse move effect for hero gradient
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })
  }
 

  return (
    <div className="flex min-h-screen flex-col" onMouseMove={handleMouseMove}>
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 -z-10 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_var(--x)_var(--y),_var(--tw-gradient-stops))] from-[#FFD700] via-[#FF4500] to-transparent"
          style={
            {
              "--x": `${mousePosition.x}px`,
              "--y": `${mousePosition.y}px`,
            } as React.CSSProperties
          }
          animate={{
            "--x": `${mousePosition.x}px`,
            "--y": `${mousePosition.y}px`,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        ></motion.div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </motion.div>

      {/* Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-[#FF8C00]/10" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
              <Image
                src="/Mistral.png"
                alt="Mistral AI Logo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/30 to-[#FF0000]/30 mix-blend-overlay"></div>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Mistral AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Solutions", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF4500] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full">
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFA500] hover:to-[#FF0000] text-black font-medium rounded-full shadow-lg shadow-[#FF4500]/20 hover:shadow-[#FF4500]/40 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="container mx-auto py-4 px-4 space-y-4">
              {["Features", "Solutions", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
                <Button variant="ghost" className="justify-start text-white hover:bg-white/10 w-full">
                  Log in
                </Button>
                <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFA500] hover:to-[#FF0000] text-black font-medium w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        {/* Clients/Logos Section */}
        <section className="py-12 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-white/60 text-sm uppercase tracking-wider">
                Trusted by innovative companies worldwide
              </p>
            </div>
            
            <div className="relative overflow-hidden w-full">
              {/* First row of logos - scrolling right to left */}
              <div className="flex animate-scroll whitespace-nowrap">
                {/* Double the logos to create seamless loop */}
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((i, index) => (
                  <div key={`row1-${i}-${index}`} className="relative group mx-4 inline-block">
                    <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-[#FF8C00]/30 transition-all duration-300">
                      <div className="text-white/40 font-semibold text-lg group-hover:text-white/70 transition-colors duration-300">
                        LOGO {i}
                      </div>
                    </div>
                    <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-[#FFD700]/0 via-[#FF8C00]/0 to-[#FF0000]/0 group-hover:from-[#FFD700]/20 group-hover:via-[#FF8C00]/20 group-hover:to-[#FF0000]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        <SolutionsSection />

        {/* Interactive Demo Section */}
        <InteractiveDemo />

        {/* Testimonials */}
        <section className="py-20 md:py-32 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium bg-gradient-to-r from-[#FFD700] to-[#FF4500] bg-clip-text text-transparent">
                  Success Stories
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-white/70 max-w-2xl mx-auto md:text-lg">
                Hear from businesses that have transformed their operations with Mistral AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Mistral AI has completely revolutionized how we approach data analysis. The insights we've gained have been invaluable.",
                  author: "Sarah Johnson",
                  role: "CTO, TechForward",
                  color: "from-[#FFD700] to-[#FFA500]",
                },
                {
                  quote:
                    "The implementation was seamless, and the results exceeded our expectations. Our efficiency has improved by over 40%.",
                  author: "Michael Chen",
                  role: "Operations Director, GlobalManufacturing",
                  color: "from-[#FFA500] to-[#FF8C00]",
                },
                {
                  quote:
                    "Mistral AI's solutions have given us a competitive edge in our market. Their team's expertise is unmatched.",
                  author: "Elena Rodriguez",
                  role: "CEO, InnovateRetail",
                  color: "from-[#FF8C00] to-[#FF4500]",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/5 relative h-full group-hover:border-white/20 transition-all duration-500">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color}`}></div>
                    <div className="absolute -left-2 -top-2 text-4xl text-white/20">&quot;</div>
                    <p className="text-white/80 mb-6 italic relative z-10">{testimonial.quote}</p>
                    <div className="relative z-10">
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <div
                    className={`absolute -inset-px rounded-xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-black">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-[#FF4500]/5 to-[#FF0000]/5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-zinc-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
            >
              {/* Background gradient animation */}
              <div className="absolute -inset-40 bg-gradient-to-r from-[#FFD700]/20 via-[#FF4500]/20 to-[#FF0000]/20 rounded-full blur-[100px] animate-pulse opacity-50"></div>

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to transform your business?
                    </h2>
                    <p className="text-white/70 mb-6">
                      Join the AI revolution with Mistral AI. Our team of experts is ready to help you implement
                      cutting-edge solutions tailored to your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFA500] hover:to-[#FF0000] text-black font-medium rounded-full shadow-lg shadow-[#FF4500]/20 hover:shadow-[#FF4500]/40 transition-all duration-300 group">
                        Get Started Today
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                        Schedule Consultation
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="relative aspect-square max-w-xs mx-auto">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-gradient-to-br from-black/60 to-black/40">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-[#FFD700]/20 via-[#FF4500]/10 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FF4500]"></div>

                        <div className="h-full flex items-center justify-center p-8">
                          <Image
                            src="/Mistral.png"
                            alt="Mistral AI Logo"
                            width={160}
                            height={160}
                            className="rounded-xl shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Animated rings */}
                      <div className="absolute -inset-4 rounded-[30px] border-2 border-[#FFD700]/20 animate-pulse"></div>
                      <div
                        className="absolute -inset-8 rounded-[40px] border-2 border-[#FF8C00]/20 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute -inset-12 rounded-[50px] border-2 border-[#FF0000]/20 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-zinc-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent"></div>
          <div className="absolute top-40 -right-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-40 -left-40 w-80 h-80 bg-[#FF0000]/10 rounded-full blur-[100px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <span className="text-sm font-medium bg-gradient-to-r from-[#FFD700] to-[#FF4500] bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start Your AI Journey</h2>
              <p className="text-white/70 md:text-lg">
                Have questions or ready to begin? Our team is here to help you implement the perfect AI solution for
                your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ y: useTransform(scrollY, [0, 1000], [0, -50]) }}
              className="max-w-md mx-auto bg-zinc-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FF4500]"></div>
              <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#FFD700]/20 via-[#FF4500]/10 to-transparent blur-2xl"></div>

              <form className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 transition-all duration-300"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFA500] hover:to-[#FF0000] text-black font-medium rounded-lg shadow-lg shadow-[#FF4500]/20 hover:shadow-[#FF4500]/40 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-white/10 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/5 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                  <Image
                    src="/Mistral.png"
                    alt="Mistral AI Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-bold text-white">Mistral AI</span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Redefining the future of AI with innovative solutions for businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "github"].map((social) => (
                  <Link
                    key={social}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/60 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: "Company",
                links: ["About Us", "Careers", "News", "Blog"],
              },
              {
                title: "Resources",
                links: ["Documentation", "API Reference", "Tutorials", "Case Studies"],
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
              },
            ].map((column, i) => (
              <div key={i}>
                <h3 className="text-white font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href="#"
                        className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center group"
                      >
                        <span>{link}</span>
                        <ChevronRight className="ml-1 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Mistral AI. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Made with cutting-edge AI technology
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}



