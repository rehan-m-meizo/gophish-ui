import {
    HiOutlineChevronDoubleLeft,
    HiOutlineChevronDoubleRight,
    HiOutlineChevronLeft,
    HiOutlineChevronRight,
} from "react-icons/hi";

export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       onPageChange,
                                       pageSize,
                                       onPageSizeChange,
                                   }) {
    return (
        <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-black font-mono">
                Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </div>

            <div className="flex gap-4 items-center">
                {/* Page Size Selector */}
                <select
                    className="border-2 border-black px-3 py-1 text-sm font-mono bg-white shadow-brutal rounded-none"
                    value={pageSize}
                    onChange={(e) => onPageSizeChange(Number(e.target.value))}
                >
                    {[5, 10, 20, 50].map((size) => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        className="px-3 py-1 border-2 border-black bg-white text-black shadow-brutal disabled:opacity-50 rounded-none font-mono"
                        onClick={() => onPageChange(1)}
                        disabled={currentPage === 1}
                    >
                        <HiOutlineChevronDoubleLeft />
                    </button>
                    <button
                        className="px-3 py-1 border-2 border-black bg-white text-black shadow-brutal disabled:opacity-50 rounded-none font-mono"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <HiOutlineChevronLeft />
                    </button>
                    <button
                        className="px-3 py-1 border-2 border-black bg-white text-black shadow-brutal disabled:opacity-50 rounded-none font-mono"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <HiOutlineChevronRight />
                    </button>
                    <button
                        className="px-3 py-1 border-2 border-black bg-white text-black shadow-brutal disabled:opacity-50 rounded-none font-mono"
                        onClick={() => onPageChange(totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        <HiOutlineChevronDoubleRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
