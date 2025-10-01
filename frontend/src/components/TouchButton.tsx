
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
          // Melhorias para toque
          touchOptimized && [
            "min-h-[44px] min-w-[44px]", // Tamanho mínimo da área de toque
            "active:scale-95", // Feedback de toque
            "transition-transform duration-150 ease-out",
            "touch-manipulation", // Otimizar para toque
            "select-none", // Prevenir seleção de texto
          ],
          // Feedback visual aprimorado
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
