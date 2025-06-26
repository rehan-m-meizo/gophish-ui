import styled from 'styled-components';

const TableButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: 'Courier New', monospace;
    border-radius: 0;
    padding: ${(props) =>
            props.size === "sm" ? "0.375rem 0.75rem" : props.size === "lg" ? "0.75rem 1.5rem" : "0.5rem 1rem"};
    font-size: ${(props) => (props.size === "lg" ? "1rem" : "0.875rem")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    transition: background-color 0.2s, transform 0.1s;
    clip-path: polygon(
            0 0,
            100% 0,
            90% 50%,
            100% 100%,
            80% 100%,
            70% 50%,
            80% 0,
            0 0
    );

    color: ${(props) =>
            props.variant === "outline" ? "#000" : "#fff"};
    background-color: ${(props) =>
            props.variant === "primary"
                    ? "#2563eb"
                    : props.variant === "secondary"
                            ? "#4b5563"
                            : props.variant === "warning"
                                    ? "#f59e0b"
                                    : props.variant === "outline"
                                            ? "white"
                                            : "#2563eb"};

    border: 3px solid black;
    box-shadow: 4px 4px 0 black;

    &:hover {
        transform: translate(-1px, -1px);
        box-shadow: 6px 6px 0 black;
        background-color: ${(props) =>
                props.variant === "primary"
                        ? "#1d4ed8"
                        : props.variant === "secondary"
                                ? "#374151"
                                : props.variant === "warning"
                                        ? "#d97706"
                                        : props.variant === "outline"
                                                ? "#f3f4f6"
                                                : "#1d4ed8"};
    }

    &:active {
        transform: translate(1px, 1px);
        box-shadow: 2px 2px 0 black;
    }
`;

export default TableButton;
