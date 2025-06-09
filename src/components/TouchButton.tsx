
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TouchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  touchOptimized?: boolean;
}

const TouchButton = React.forwardRef<HTMLButtonElement, TouchButtonProps>(
  ({ className, variant = "default", size = "default", touchOptimized = true, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          // Touch-friendly improvements
          touchOptimized && [
            "min-h-[44px] min-w-[44px]", // Minimum touch target size
            "active:scale-95", // Touch feedback
            "transition-transform duration-150 ease-out",
            "touch-manipulation", // Optimize for touch
            "select-none", // Prevent text selection
          ],
          // Enhanced visual feedback
          "relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-white/20 before:opacity-0 before:transition-opacity",
          "active:before:opacity-100",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

TouchButton.displayName = "TouchButton";

export default TouchButton;
