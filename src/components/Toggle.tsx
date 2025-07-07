"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client"

function Toggle({ ...props }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent mismatched render
  return (
    <motion.div
      {...props}
      whileTap={{ scale: 0.4 }}
    >
      {theme === "system" || theme === "dark" ? (
        <Sun
          onClick={() => setTheme("light")}
          className='text-orange-500 cursor-pointer'
          size={28}
        />
      ) : (
        <Moon
          onClick={() => setTheme("dark")}
          className='text-blue-500 cursor-pointer'
          size={28}
        />
      )}
    </motion.div>
  );
}

export default Toggle;
