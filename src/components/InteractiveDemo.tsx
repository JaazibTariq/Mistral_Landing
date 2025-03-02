import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatbotDemo from "./ChatbotDemo";

const InteractiveDemo = () => {
  const demoRef = useRef(null);
  const [demoInView, setDemoInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setDemoInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => {
      if (demoRef.current) {
        observer.unobserve(demoRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={demoRef}
      className="py-20 md:py-32 bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={demoInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent"></div>
      <div className="absolute top-40 -right-40 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-[#FF0000]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Demo Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-sm font-medium bg-gradient-to-r from-[#FFD700] to-[#FF4500] bg-clip-text text-transparent">
                Interactive Demo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience the Power of Mistral AI</h2>
            <p className="text-white/70 mb-6 md:text-lg">
              Our platform combines cutting-edge AI technologies to deliver unprecedented results. See how our
              solutions can transform your business.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Real-time data processing and analysis",
                "Advanced pattern recognition and prediction",
                "Seamless integration with existing systems",
                "Customizable solutions for your specific needs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full p-1 bg-gradient-to-r from-[#FFD700] to-[#FF4500]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] hover:from-[#FFA500] hover:to-[#FF0000] text-black font-medium rounded-full shadow-lg shadow-[#FF4500]/20 hover:shadow-[#FF4500]/40 transition-all duration-300 group">
                Try Interactive Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full">
                Watch Video
              </Button>
            </div>
          </motion.div>

          {/* Right Side: Fixed Chatbot + Interactive Demo */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-xl mx-auto lg:mr-0">
              <div className="rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-black/40 shadow-2xl transform transition-transform hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#FF4500]" />

                <div className="p-6 flex flex-col h-full min-h-[500px]">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-white font-medium">Mistral AI Demo</div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FF8C00]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FF0000]"></div>
                    </div>
                  </div>

                  {/* Chatbot Interface */}
                  <div className="flex-1 overflow-hidden">
                    <ChatbotDemo />
                  </div>

                  {/* Processing Animation */}
                  <div className="mt-6 bg-black/30 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></div>
                      <div className="text-white/80 text-sm">Processing data...</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-[#FFD700] to-[#FF4500] h-1.5 rounded-full"
                        style={{
                          width: `${demoInView ? '66%' : '0%'}`,
                          transition: 'width 1.5s ease-in-out'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating animation container */}
              <motion.div
                className="absolute -top-8 -right-8 -z-10 w-64 h-64 bg-gradient-to-r from-[#FFD700]/20 to-[#FF4500]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default InteractiveDemo;
