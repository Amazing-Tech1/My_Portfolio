"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react"
import { cn } from "cn"

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  y?: number
  once?: boolean
  blur?: boolean
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  once = true,
  blur = false,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-90px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = HTMLMotionProps<"div"> & {
  delay?: number
  stagger?: number
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  ...props
}: StaggerProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  y?: number
}

export function StaggerItem({
  children,
  className,
  y = 22,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
