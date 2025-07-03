"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

      {/* Mouse follower */}
      <motion.div
        className="absolute w-32 h-32 bg-purple-500/10 rounded-full blur-xl pointer-events-none"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        style={{ zIndex: 5 }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header
          className="p-6 md:p-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity w-fit"
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
              </div>
            </Link>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 404 Text */}
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.h1
                className="text-8xl  font-orbitron md:text-9xl font-bold text-white mb-4 leading-none"
                animate={{
                  textShadow: [
                    "0 0 0 rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.5)",
                    "0 0 0 rgba(139, 92, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  type: "tween",
                }}
              >
                404
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] mx-auto mb-6"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-white mb-4"
                variants={itemVariants}
              >
                Portal Not Found
              </motion.h2>
              <motion.p
                className="text-lg text-white/80 leading-relaxed max-w-md mx-auto"
                variants={itemVariants}
              >
                This portal doesn't exist in our dimension. Let's guide you back
                to the extraordinary.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-white/10 hover:text-white hover:border-white/50 px-8 py-3 rounded-lg transition-all duration-300"
                  onClick={() => router.push("/")}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </motion.div>
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
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-white/70 text-sm">
              © 2025 Xiorent. Preparing for the extraordinary.
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
