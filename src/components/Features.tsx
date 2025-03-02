"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, Database, Layers, Zap, Cpu } from "lucide-react";

const featuresData = [
  {
    icon: Brain,
    title: "Advanced Neural Networks",
    description: "Leverage state-of-the-art neural architectures for complex problem-solving and pattern recognition.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Understand and generate human language with unprecedented accuracy and contextual awareness.",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: Database,
    title: "Intelligent Data Analysis",
    description: "Extract meaningful insights from your data with our powerful analytical engines.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Layers,
    title: "Multi-modal Learning",
    description: "Process and understand multiple types of data simultaneously for comprehensive insights.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Get instant results with our high-performance computing infrastructure optimized for speed.",
    color: "from-yellow-400 to-red-500",
  },
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description: "Tailor our AI capabilities to your specific business needs with customizable frameworks.",
    color: "from-orange-400 to-red-600",
  },
];

const Features = () => {
  return (
    <motion.section
      id="features"
      className="py-20 md:py-32 bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent)]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            AI Features That Redefine Intelligence
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4 md:text-lg">
            Our AI capabilities bring you cutting-edge innovation, optimized for real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group rounded-xl p-8 border border-white/10 backdrop-blur-lg bg-white/5 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-10 blur-2xl`}></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-xl bg-white/10">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
