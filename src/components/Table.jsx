import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiPlus
} from "react-icons/hi";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
import Pagination from "../pagination/pagination";
import TableButton from "../../comopnents/TableButton/TableButton";
import { Card, CardBody } from "../Card/Card";
import CellRenderer from "./CellRenderer";

export default function Table({
                                  columns,
                                  data,
                                  totalItems,
                                  tableName,
                                  addAction,
                                  hasActions,
                                  actions,
                                  globalFilter,
                                  setGlobalFilter,
                                  sortConfig,
                                  setSortConfig,
                                  currentPage,
                                  setCurrentPage,
                                  pageSize,
                                  setPageSize
                              }) {
    const handleSort = (key) => {
        const direction =
            sortConfig?.key === key && sortConfig.direction === "asc"
                ? "desc"
                : "asc";
        setSortConfig({ key, direction });
    };

    const renderSortIcon = (columnKey) => {
        if (!sortConfig || sortConfig.key !== columnKey) {
            return (
                <HiOutlineChevronUp className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
            );
        }
        return sortConfig.direction === "asc" ? (
            <HiOutlineChevronUp className="w-4 h-4 text-black" />
        ) : (
            <HiOutlineChevronDown className="w-4 h-4 text-black" />
        );
    };

    const renderActionButtons = () => {
        if (addAction) {
            return (
                <TableButton onClick={addAction} variant="warning">
                    <HiPlus className="w-4 h-4 mr-1" /> Add
                </TableButton>
            );
        }
        if (hasActions) {
            return (
                <div className="grid gap-1 grid-cols-2">
                    {actions.map((action, index) => (
                        <TableButton key={index} onClick={action.onClick} variant="warning">
                            {action.name}
                        </TableButton>
                    ))}
                </div>
            );
        }
        return null;
    };

    const totalPages = Math.ceil(totalItems / pageSize);

    return (
        <Card className="border-4 bg-white rounded-none">
            <CardBody className="p-6">
                <div className="flex justify-between mb-6">
                    <GlobalFilter
                        data={[]} // ignore if server side
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                        tableName={tableName}
                    />
                    {renderActionButtons()}
                </div>

                <table className="min-w-full border-2 border-black">
                    <thead>
                    <tr>
                        {columns?.map((col) => (
                            <th
                                key={col.accessor}
                                onClick={() => handleSort(col.accessor)}
                                className="px-6 py-3 text-left text-sm font-mono font-semibold text-black uppercase tracking-wide border-2 border-black bg-gray-100 group cursor-pointer"
                            >
                                <div className="flex items-center space-x-1">
                                    <span>{col.Header}</span>
                                    {renderSortIcon(col.accessor)}
                                </div>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black">
                    {data?.map((row, idx) => (
                        <tr key={idx} className="odd:bg-gray-100 hover:bg-yellow-100">
                            {columns.map((column) => (
                                <td
                                    key={column.accessor}
                                    className="px-6 py-3 text-sm font-mono border-2 border-black"
                                >
                                    <CellRenderer column={column} row={row} />
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="mt-6">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                        pageSize={pageSize}
                        onPageSizeChange={setPageSize}
                        totalItems={totalItems}
                    />
                </div>
            </CardBody>
        </Card>
    );
}
