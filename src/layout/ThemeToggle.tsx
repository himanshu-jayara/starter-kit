

import { motion, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";

const MotionBox = motion("div");

const DarkModeSwitch = ({
}) => {
      const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  // Apply theme to <html> element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

    // Also change PWA theme color dynamically
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute(
        "content",
        theme === "dark" ? "#0f172a" : "#ffffff" // match your design
      );
    }
  }, [theme]);
  const size = 26;

  const containerVariants: Variants = {
    dark: { backgroundColor: "#1E293B" }, // Night sky
    light: { backgroundColor: "#93C5FD" }, // Day sky
  };

  // Stars fade in/out based on mode
  const starVariants: Variants = {
    dark: { opacity: 1, y: 0 },
    light: { opacity: 0, y: -20 },
  };

  // Clouds fade in/out based on mode
  const cloudVariants: Variants = {
    light: { opacity: 1, y: 0 },
    dark: { opacity: 0, y: 20 },
  };

    const btnStyle: React.CSSProperties = {
    minWidth: `${size * 2.1}px`,
    height: `${size}px`,
    borderRadius: `${size}px`,
    padding: `${size / 8}px`,
    boxSizing: "content-box",
    display: "flex",
    justifyContent: theme === "dark" ? "flex-end" : "flex-start",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    backgroundColor: theme === "dark" ? "#1E293B" : "#F1F5F9",
    transition: "all 0.3s ease",
  };

  const knobStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${size}px`,
    backgroundColor: theme === "dark" ? "#0EA5E9" : "#64748B",
    transition: "all 0.3s ease",
  };
  return (
    <div
       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        cursor: "pointer",
      }}
    >
      <motion.div
        className="btn"
        variants={containerVariants}
        initial={theme === "dark" ? "light" : "dark"}
        animate={theme}
        style={btnStyle}
      >
        {theme === "dark" ? (
          <>
            {/* Stars (twinkling) */}
            <MotionBox
              style={{
                position: "absolute",
                top: "65%",
                left: "30%",
                width: `${size * 0.25}px`,
                height: `${size * 0.25}px`,
                background: "white",
                clipPath:
                  "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)",
              }}
              variants={starVariants}
              animate={theme}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              whileInView={{
                x: [4, -6, 0], // drift left-right opposite
              }}
            />
            <MotionBox
              style={{
                position: "absolute",
                top: "25%",
                left: "10%",
                width: `${size * 0.25}px`,
                height: `${size * 0.25}px`,
                background: "white",
                clipPath:
                  "polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)",
              }}
              variants={starVariants}
              animate={theme}
               transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              whileInView={{
                x: [0, 6, 0], // drift left-right opposite
              }}
            />
            <MotionBox
              style={{
                position: "absolute",
                top: "60%",
                left: "45%",
                width: `${size * 0.15}px`,
                height: `${size * 0.15}px`,
                background: "white",
                borderRadius: "50%",
              }}
              variants={starVariants}
              animate={theme}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              whileInView={{
                x: [5, -6, 10], // drift left-right opposite
              }}
            />
          </>
        ) : (
          <>
            {/* Clouds (drifting) */}
            <MotionBox
              style={{
                position: "absolute",
                top: "30%",
                left: "55%",
                width: `${size * 0.6}px`,
                height: `${size * 0.3}px`,
                borderRadius: "50%",
                background: "white",
                opacity: 0.9,
              }}
              variants={cloudVariants}
              animate={theme}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              whileInView={{
                x: [0, 6, 0], // drift left-right
              }}
            />
            <MotionBox
              style={{
                position: "absolute",
                top: "60%",
                left: "75%",
                width: `${size * 0.45}px`,
                height: `${size * 0.22}px`,
                borderRadius: "50%",
                background: "white",
                opacity: 0.9,
              }}
              variants={cloudVariants}
              animate={theme}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              whileInView={{
                x: [0, -6, 0], // drift left-right opposite
              }}
            />
          </>
        )}

        {/* Knob (sun/moon) */}
        <motion.div
          layout
          animate={theme}
          variants={{
            dark: {
              boxShadow: "inset 0px 13px white, inset 0px 13px 1px 1px white",
              rotate: 90,
              background: "transparent",
            },
            light: {
              boxShadow: "0px 0px 10px 5px rgba(255, 255, 0, 0.5)",
              background: "yellow",
              borderRadius: "50%",
              width: `${size}px`,
              height: `${size}px`,
            },
          }}
          initial={false}
          style={knobStyle}
        />
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;