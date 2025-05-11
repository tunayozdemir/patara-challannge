import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, type MotionProps } from "framer-motion"

type ButtonVariant = "default" | "outline" | "ghost" | "customBlue" | "success"
type ButtonSize = "default" | "sm" | "lg"

interface ButtonProps extends
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag">,
  MotionProps {
  variant?: ButtonVariant
  size?: ButtonSize
  text?: string
  children?: React.ReactNode
  full?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-input bg-transparent hover:bg-accent",
  ghost: "hover:bg-accent",
  customBlue: "bg-[rgba(0,110,255,1)] text-white rounded-[12px] h-[40px]",
  success: "bg-green-600 text-white hover:bg-green-700",
}

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-9 px-4 py-2 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-10 px-6 text-base",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      whileHover,
      whileTap,
      transition,
      text,
      children,
      full = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          full && "w-full",
          disabled
            ? "bg-[#383838] text-white opacity-100 cursor-not-allowed"
            : "",
          className
        )}
        whileHover={!disabled ? (whileHover ?? { scale: 1.03 }) : undefined}
        whileTap={!disabled ? (whileTap ?? { scale: 0.97 }) : undefined}
        transition={transition ?? { type: "spring", stiffness: 400, damping: 10 }}
        disabled={disabled}
        {...props}
      >
        {text ?? children}
      </motion.button>
    )
  }
)

Button.displayName = "Button"
export { Button }
