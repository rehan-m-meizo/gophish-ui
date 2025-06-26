

export default function CellRenderer({ column, row }) {
    const value = row[column.accessor];

    if (typeof column.Cell === "function") {
        return column.Cell({ value, column, row });
    }

    if (column.Cell) {
        const CellComponent = column.Cell;
        return <CellComponent value={value} column={column} row={row} />;
    }

    return <div className="text-sm text-gray-700">{value}</div>;
}