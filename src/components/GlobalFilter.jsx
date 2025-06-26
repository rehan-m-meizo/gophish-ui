import { useState } from "react";

export default function GlobalFilter({ globalFilter, setGlobalFilter, tableName }) {
    const [value, setValue] = useState(globalFilter);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setGlobalFilter(newValue); // server filtering
    };

    return (
        <div className="relative flex items-center w-full max-w-sm">
            <input
                type="search"
                value={value || ""}
                onChange={handleChange}
                placeholder={`Search ${tableName}...`}
                className="block w-full px-3 py-2 text-sm border-2 border-black bg-white placeholder-gray-400 focus:outline-none focus:ring-0 shadow-[4px_4px_0_black] rounded-none font-semibold"
                style={{ fontFamily: 'monospace' }}
            />
            {value && (
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => {
                        setValue("");
                        setGlobalFilter("");
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-800"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
