import React from "react";
import { cn } from "src/utils/utils.js";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

const Avatar = React.forwardRef(function Avatar({ className, ...props }, ref) {
    return (
        <AvatarPrimitive.Root
            ref={ref}
            className={cn(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md border-2 border-black bg-white",
                className
            )}
            {...props}
        />
    );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(function AvatarImage({ className, ...props }, ref) {
    return (
        <AvatarPrimitive.Image
            ref={ref}
            className={cn("aspect-square h-full w-full object-cover", className)}
            {...props}
        />
    );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(function AvatarFallback({ className, ...props }, ref) {
    return (
        <AvatarPrimitive.Fallback
            ref={ref}
            className={cn(
                "flex h-full w-full items-center justify-center text-black text-sm bg-yellow-300 border-2 border-black rounded-md",
                className
            )}
            {...props}
        />
    );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
