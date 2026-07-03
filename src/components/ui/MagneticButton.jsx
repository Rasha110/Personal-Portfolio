"use client";

import { motion } from "framer-motion";

export default function MagneticButton({ as: Tag = "button", children, className = "", ...props }) {
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
