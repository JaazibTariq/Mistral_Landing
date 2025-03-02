import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Shield, Globe, Cpu, Sparkles } from "lucide-react";
import { useState } from "react";

const solutionsData = [
  {
    title: "Healthcare",
    description:
      "Transform patient care through AI-powered diagnostics and personalized treatment strategies. Our solutions enable:",
    color: "from-amber-400 to-orange-500",
    features: [
      "Real-time predictive analytics",
      "Automated patient monitoring",
      "Drug interaction prediction",
      "Personalized treatment plans"
    ],
    icon: <Shield className="h-8 w-8 text-white" />,
    image: (
      <div className="bg-gradient-to-br from-amber-400/20 to-orange-500/20 w-full h-48 rounded-xl flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl" />
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-amber-400">
          <path fill="currentColor" d="M12,2L1,21H23M12,6l7.53,13H4.47M11,10v4h2v-4m-2,6v2h2v-2"/>
        </svg>
      </div>
    )
  },
  {
    title: "Finance",
    description:
      "Revolutionize financial operations with intelligent risk management and fraud detection systems. Key capabilities:",
    color: "from-orange-400 to-red-500",
    features: [
      "Real-time fraud detection",
      "Algorithmic trading models",
      "Risk assessment engines",
      "Portfolio optimization"
    ],
    icon: <Globe className="h-8 w-8 text-white" />,
    image: (
      <div className="bg-gradient-to-br from-orange-400/20 to-red-500/20 w-full h-48 rounded-xl flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl" />
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-orange-400">
          <path fill="currentColor" d="M12,1L21,5V11H19V8L12,5L5,8V19H11V21H3V5M19,15H15V13H19V15M22,20V22H14V20H15V17H21V20H22M17,20H19V19H17V20Z"/>
        </svg>
      </div>
    )
  },
  {
    title: "Manufacturing",
    description:
      "Optimize production lines and supply chains with predictive maintenance and quality control systems. Features include:",
    color: "from-red-400 to-rose-500",
    features: [
      "Predictive maintenance alerts",
      "Quality control automation",
      "Supply chain optimization",
      "Energy consumption analytics"
    ],
    icon: <Cpu className="h-8 w-8 text-white" />,
    image: (
      <div className="bg-gradient-to-br from-red-400/20 to-rose-500/20 w-full h-48 rounded-xl flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-rose-500 rounded-full blur-2xl" />
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-red-400">
          <path fill="currentColor" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M12,5A7,7 0 0,0 5,12H7A5,5 0 0,1 12,7V5M12,14A2,2 0 0,1 14,16A2,2 0 0,1 12,18A2,2 0 0,1 10,16A2,2 0 0,1 12,14Z"/>
        </svg>
      </div>
    )
  },
  {
    title: "Retail",
    description:
      "Enhance customer experiences with AI-driven personalization and inventory management. Our solutions provide:",
    color: "from-rose-500 to-pink-500",
    features: [
      "Customer behavior analysis",
      "Dynamic pricing models",
      "Inventory forecasting",
      "Personalized recommendations"
    ],
    icon: <Sparkles className="h-8 w-8 text-white" />,
    image: (
      <div className="bg-gradient-to-br from-rose-400/20 to-pink-500/20 w-full h-48 rounded-xl flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-2xl" />
        <svg viewBox="0 0 24 24" className="w-16 h-16 text-rose-400">
          <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z"/>
        </svg>
      </div>
    )
  }
];

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % solutionsData.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + solutionsData.length) % solutionsData.length);
  };

  return (
    <motion.section
      id="solutions"
      className="py-20 md:py-32 bg-zinc-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500 mb-4"
          >
            Transforming Industries
          </motion.h2>
          <p className="text-white/70 max-w-2xl mx-auto md:text-lg">
            Discover how Mistral AI is revolutionizing various industries with tailored AI solutions.
          </p>
        </div>

        <div className="relative h-[700px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ x: direction === "right" ? 300 : -300, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction === "right" ? -300 : 300, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex justify-center"
            >
              <div className="w-full max-w-4xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Image/Graphic Section */}
                  <div className="relative">
                    {solutionsData[activeIndex].image}
                    <div className="mt-6 space-y-3">
                      {solutionsData[activeIndex].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${solutionsData[activeIndex].color}`} />
                          <span className="text-white/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <motion.div
                        className={`p-6 rounded-2xl bg-gradient-to-br ${solutionsData[activeIndex].color} w-max mx-auto md:mx-0`}
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                        }}
                      >
                        {solutionsData[activeIndex].icon}
                      </motion.div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500 mt-6 mb-4">
                        {solutionsData[activeIndex].title}
                      </h3>
                      <p className="text-white/80 text-lg mb-6">
                        {solutionsData[activeIndex].description}
                      </p>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 px-8 py-6 rounded-full text-lg w-full md:w-auto"
                    >
                      Explore Solutions
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-md border border-white/10 transition-all"
          >
            <ChevronLeft className="h-6 w-6 text-amber-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-md border border-white/10 transition-all"
          >
            <ChevronRight className="h-6 w-6 text-rose-400" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {solutionsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-rose-500 scale-150" : "bg-zinc-600"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;