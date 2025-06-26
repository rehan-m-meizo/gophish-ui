import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils.js";

// Neubrutalist Button Variants
const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-white text-black border-2 border-black hover:bg-neutral-200 active:scale-[0.98] shadow-default",
                destructive:
                    "bg-red-500 text-white border-2 border-red-600 hover:bg-red-600 active:scale-[0.98] shadow-destructive",
                outline:
                    "bg-transparent text-black border-2 border-black hover:bg-neutral-100 active:scale-[0.98] shadow-outline",
                secondary:
                    "bg-yellow-300 text-black border-2 border-black hover:bg-yellow-400 active:scale-[0.98] shadow-secondary",
                ghost:
                    "bg-transparent text-black border-2 border-black hover:bg-neutral-100 active:scale-[0.98] shadow-ghost",
                link:
                    "text-blue-600 underline-offset-4 hover:underline border-0 bg-transparent p-0",
            },
            size: {
                default: "h-10 px-4 py-2 rounded-md",
                sm: "h-9 px-3 rounded",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 w-10 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size }), "shadow-brutal", className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
