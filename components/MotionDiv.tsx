'use client'
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  x?: number;
  y?: number;
  duration: number;
};

export const MotionDiv = ({ children, x, y, duration }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: duration }}
      variants={{
        hidden: { opacity: 0, x: x, y: y },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
