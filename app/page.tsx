"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Mail,
  Bell,
  Sparkles,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedBackground from "@/components/AnimatedBackground";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer to July 10th, 2025
useEffect(() => {
  const targetDate = new Date("2025-07-16T00:00:00");

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(timer);
    }
  }, 1000);

  return () => clearInterval(timer);
}, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      // Optionally, add API call here to handle email submission
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#2C1C5F] via-[#050915] to-[#1E1E4B] relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          className="p-6 md:p-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/logo.svg"
                alt="Xiorent Logo"
                width={201}
                height={63}
              />
            </motion.div>
            {/* <div className="hidden md:flex space-x-4 text-white/70 italic">
              coming soon...
            </div> */}
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Section */}
            <div className="mb-12">
              <motion.div
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-5 w-5 text-purple-300" />
                </motion.div>
                <span className="text-white text-sm font-medium">
                  A new era is coming on your way
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl font-orbitron  md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                variants={itemVariants}
              >
                This is not just a{" "}
                <motion.span
                  className="bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    type: "tween",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Launch
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed font-medium"
                variants={itemVariants}
              >
                It is a portal into something
              </motion.p>
              <motion.p
                className="text-2xl font-orbitron md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#F472B6] bg-clip-text text-transparent mb-12"
                variants={itemVariants}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Extraordinary
              </motion.p>
            </div>

            {/* Launch Date Display */}
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-300/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Rocket className="h-4 w-4 text-purple-300" />
                </motion.div>
                <span className="text-white/90 text-sm font-medium">
                  Launch Date: July 10th, 2025
                </span>
              </motion.div>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              className="grid  grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  animate={
                    item.label === "Seconds"
                      ? {
                          boxShadow: [
                            "0 0 0 rgba(139, 92, 246, 0)",
                            "0 0 20px rgba(139, 92, 246, 0.3)",
                            "0 0 0 rgba(139, 92, 246, 0)",
                          ],
                        }
                      : {}
                  }
                  transition={
                    item.label === "Seconds"
                      ? {
                          boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            type: "tween",
                          },
                          scale: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                          backgroundColor: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                          borderColor: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                        }
                      : {
                          scale: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                          backgroundColor: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                          borderColor: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          },
                        }
                  }
                >
                  <motion.div
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                    key={item.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.value.toString().padStart(2, "0")}
                  </motion.div>
                  <div className="text-white/70 text-sm md:text-base uppercase tracking-wider font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          className="p-6 md:p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 Xiorent. Preparing for the extraordinary.
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
