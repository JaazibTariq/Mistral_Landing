import React, { useRef, useState, useEffect, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, MessageSquare, Code, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface AnimatedTextProps {
  text: string;
}

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Generate particles with warm orange theme
 const [particles, setParticles] = useState<
  Array<{ x: number; y: number; duration: number; delay: number; size: number; color: string }>
>([])

useEffect(() => {
  // Generate particles only on the client side
  const newParticles = Array(20)
    .fill(null)
    .map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      size: Math.random() * 10 + 5,
      color: `hsla(${Math.random() * 60 + 200}, 70%, 60%, ${Math.random() * 0.3 + 0.1})`,
    }))
  setParticles(newParticles)
}, [])

  // Animated text component
  const AnimatedText: React.FC<AnimatedTextProps> = memo(({ text }) => {
    return (
      <span className="inline-block">
        {text.split("").map((char: string, index: number) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    );
  });

  return (
    <motion.section
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-black to-[#1A0000] py-20 md:py-32 lg:min-h-[90vh] flex items-center"
      style={{ y: heroY }}
    >
      {/* Mountain silhouette background - similar to the reference image */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-72 bg-[url('/mountains-silhouette.svg')] bg-cover bg-bottom opacity-30 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="particle absolute rounded-full opacity-0 animate-float"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 z-1"></div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF8C00]/20 to-[#FF4500]/20 backdrop-blur-sm border border-[#FFD700]/30">
              <span className="text-sm md:text-base font-medium bg-gradient-to-r from-[#FFD700] to-[#FF4500] bg-clip-text text-transparent">
                Frontier AI for All Builders
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              <span className="relative">
                <AnimatedText text="Intelligent Solutions" />
                <span className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/20 via-[#FF8C00]/20 to-[#FF0000]/20 blur-xl opacity-50 animate-pulse"></span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-[#FFA500] to-white bg-clip-text text-transparent">
                <AnimatedText text="In Your Hands" />
              </span>
            </h1>
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Configurable AI that adapts to your needs. Build powerful applications
              with customizable models designed for your specific challenges.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFA500] hover:to-[#FF0000] text-black font-medium rounded-full shadow-lg shadow-[#FF4500]/20 hover:shadow-[#FF4500]/40 transition-all duration-300 group"
            >
              Talk to Ie
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#FFD700]/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm"
            >
              Enterprise Deployments
            </Button>
          </motion.div>

          {/* Floating cards grid - replacing previous cards with a 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#FF4500]/10 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-[#FFD700]/20 transform hover:scale-[1.02] transition-all duration-500 overflow-hidden group p-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FF4500]"></div>
              <Brain className="h-8 w-8 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Advanced Neural Networks</h3>
              <p className="text-white/70">
                State-of-the-art architectures that adapt to complex problem domains.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-[#FF8C00]/10 to-[#FF0000]/10 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-[#FF8C00]/20 transform hover:scale-[1.02] transition-all duration-500 overflow-hidden group p-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF8C00] to-[#FF0000]"></div>
              <MessageSquare className="h-8 w-8 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Natural Language Processing</h3>
              <p className="text-white/70">
                Understand and generate human language with unprecedented accuracy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-[#FFA500]/10 to-[#FF4500]/10 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-[#FFA500]/20 transform hover:scale-[1.02] transition-all duration-500 overflow-hidden group p-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFA500] to-[#FF4500]"></div>
              <Code className="h-8 w-8 text-[#FFA500] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">APIs on la Plateforme</h3>
              <p className="text-white/70">
                Developer-friendly interfaces for seamless integration across platforms.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-[#FF7F50]/10 to-[#FF0000]/10 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-[#FF7F50]/20 transform hover:scale-[1.02] transition-all duration-500 overflow-hidden group p-6">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF7F50] to-[#FF0000]"></div>
              <Shield className="h-8 w-8 text-[#FF7F50] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-white/70">
                Built-in compliance and security features for business deployments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay at bottom - more subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-2"></div>
    </motion.section>
  );
};

export default HeroSection;