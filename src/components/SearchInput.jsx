import React, { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "src/utils/utils.js";

export function SearchInput({
                                className,
                                placeholder = "Search",
                                onClear,
                                ...props
                            }) {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const handleClear = () => {
        setValue("");
        inputRef.current?.focus();
        if (onClear) onClear();
    };

    return (
        <div
            className={cn(
                "flex items-center border-2 border-primary-600 bg-white rounded-md px-3 py-2 w-full",
                "shadow-brutal",
                className
            )}
        >
            <Search className="w-4 h-4 text-black mr-2 shrink-0" />
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-transparent text-black text-sm focus:outline-none placeholder:text-gray-400"
                placeholder={placeholder}
                {...props}
            />
            {value && (
                <button
                    onClick={handleClear}
                    className="ml-2 text-black hover:text-red-500 font-bold focus:outline-none"
                    type="button"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}
