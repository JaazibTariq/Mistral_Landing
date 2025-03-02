import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const solutionsData = [
  {
    title: "Healthcare",
    description:
      "Transform patient care through AI-powered diagnostics and personalized treatment strategies. Our solutions enable real-time analytics and monitoring.",
    color: "from-amber-400 to-orange-500",
    features: [
      "Real-time predictive analytics",
      "Automated patient monitoring",
      "Drug interaction prediction",
      "Personalized treatment plans"
    ],
    image: (
      <motion.div 
        className="bg-gradient-to-br from-amber-400/20 to-orange-500/20 w-full h-48 rounded-xl flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    )
  },
  {
    title: "Finance",
    description:
      "Revolutionize financial operations with intelligent risk management and fraud detection systems. Key capabilities include real-time detection.",
    color: "from-orange-400 to-red-500",
    features: [
      "Real-time fraud detection",
      "Algorithmic trading models",
      "Risk assessment engines",
      "Portfolio optimization"
    ],
    image: (
      <motion.div 
        className="bg-gradient-to-br from-orange-400/20 to-red-500/20 w-full h-48 rounded-xl flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    )
  },
  {
    title: "Manufacturing",
    description:
      "Optimize production lines and supply chains with predictive maintenance and quality control systems. Features include automation.",
    color: "from-red-400 to-rose-500",
    features: [
      "Predictive maintenance alerts",
      "Quality control automation",
      "Supply chain optimization",
      "Energy consumption analytics"
    ],
    image: (
      <motion.div 
        className="bg-gradient-to-br from-red-400/20 to-rose-500/20 w-full h-48 rounded-xl flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-24 h-24 bg-gradient-to-br from-red-400 to-rose-500 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    )
  },
  {
    title: "Retail",
    description:
      "Enhance customer experiences with AI-driven personalization and inventory management. Solutions provide behavior analysis.",
    color: "from-rose-500 to-pink-500",
    features: [
      "Customer behavior analysis",
      "Dynamic pricing models",
      "Inventory forecasting",
      "Personalized recommendations"
    ],
    image: (
      <motion.div 
        className="bg-gradient-to-br from-rose-400/20 to-pink-500/20 w-full h-48 rounded-xl flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
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
      className="py-20 bg-zinc-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-full blur-3xl"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500 mb-4"
          >
            Transforming Industries
          </motion.h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Discover how Mistral AI is revolutionizing industries with tailored AI solutions.
          </p>
        </div>

        <div className="relative h-[550px]">
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
              <motion.div 
                className="w-full max-w-4xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    {solutionsData[activeIndex].image}
                    <div className="mt-6 space-y-3">
                      {solutionsData[activeIndex].features.map((feature, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-md cursor-pointer"
                          whileHover={{ x: 5, backgroundColor: "rgba(120, 120, 120, 0.2)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${solutionsData[activeIndex].color}`} />
                          <span className="text-white/80 text-base">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500 mb-4">
                        {solutionsData[activeIndex].title}
                      </h3>
                      <p className="text-white/80 text-lg mb-6">
                        {solutionsData[activeIndex].description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 px-8 py-3 rounded-full text-lg w-full md:w-auto">
                        Explore Solutions
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-zinc-800/50 backdrop-blur-md border border-white/10"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(120, 120, 120, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6 text-amber-400" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-zinc-800/50 backdrop-blur-md border border-white/10"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(120, 120, 120, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-rose-400" />
          </motion.button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {solutionsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-rose-500" : "bg-zinc-600"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;