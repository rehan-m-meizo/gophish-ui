import styled from "styled-components";
import { useId } from "react";
import { ResponsiveContainer } from "recharts";

// -- Buttons --
export const Button = styled.button.attrs((props) => ({
    className: props.className || "",
}))`
    background-color: white;
    color: #0d5e97;
    border: 3px solid #0d5e97;
    box-shadow: 4px 4px 0px #0d5e97;
    padding: 0.5rem 1.25rem;
    font-family: monospace;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.1s ease;
    text-transform: uppercase;

    &:hover {
        background-color: #facc15;
    }
`;

// -- Inputs --
export const Input = styled.input.attrs((props) => ({
    className: props.className || "",
}))`
    border: 3px solid #0d5e97;
    background-color: white;
    box-shadow: 4px 4px 0px #0d5e97;
    padding: 0.5rem 1rem;
    font-family: monospace;
    font-size: 1rem;
    width: 100%;

    &:focus {
        outline: none;
        background-color: #fef9c3;
    }
`;

// -- Avatar --
export const Avatar = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    width: 40px;
    height: 40px;
    border: 3px solid #0d5e97;
    box-shadow: 2px 2px 0px #0d5e97;
    border-radius: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fef3c7;
`;

// -- Table --
export const Table = styled.table.attrs((props) => ({
    className: props.className || "",
}))`
    width: 100%;
    border-collapse: collapse;
    font-family: monospace;
`;

export const Th = styled.th.attrs((props) => ({
    className: props.className || "",
}))`
    border: 2px solid #0d5e97;
    padding: 0.75rem;
    background-color: #f3f4f6;
    text-transform: uppercase;
    text-align: left;
`;

export const Td = styled.td.attrs((props) => ({
    className: props.className || "",
}))`
    border: 2px solid #0d5e97;
    padding: 0.75rem;
    background-color: white;
`;

export const Tr = styled.tr.attrs((props) => ({
    className: props.className || "",
}))`
    &:nth-child(odd) {
        background-color: #f9fafb;
    }

    &:hover {
        background-color: #fef3c7;
    }
`;

// -- Typography --
export const Heading = styled.h1.attrs((props) => ({
    className: props.className || "",
}))`
    font-size: 2rem;
    font-family: monospace;
    font-weight: bold;
    color: #0d5e97;
    text-transform: uppercase;
    border-bottom: 3px solid #0d5e97;
    display: inline-block;
`;

export const Paragraph = styled.p.attrs((props) => ({
    className: props.className || "",
}))`
    font-family: monospace;
    font-size: 1rem;
    color: #0d5e97;
    line-height: 1.5;
`;

// -- Badge --
export const Badge = styled.span.attrs((props) => ({
    className: props.className || "",
}))`
    background-color: yellow;
    color: #0d5e97;
    font-family: monospace;
    padding: 0.25rem 0.5rem;
    border: 2px solid #0d5e97;
    box-shadow: 2px 2px 0px #0d5e97;
    display: inline-block;
`;

// -- Progress --
export const ProgressContainer = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    width: 100%;
    background-color: #fef9c3;
    border: 2px solid #0d5e97;
    box-shadow: 2px 2px 0 #0d5e97;
    height: 20px;
`;

export const Progress = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    height: 100%;
    background-color:  ${(props) => props.color || "#0d5e97"};
    width: ${(props) => props.value || 0}%;
    transition: width 0.3s ease-in-out;
`;

// -- Switch --
export const Switch = styled.label.attrs((props) => ({
    className: props.className || "",
}))`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-family: monospace;
`;

export const SwitchInput = styled.input.attrs((props) => ({
    className: props.className || "",
}))`
    display: none;

    &:checked + span {
        background-color: #0d5e97;
    }
`;

export const SwitchSlider = styled.span.attrs((props) => ({
    className: props.className || "",
}))`
    height: 20px;
    width: 40px;
    background-color: white;
    border: 2px solid #0d5e97;
    box-shadow: 2px 2px 0px #0d5e97;
    display: inline-block;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        height: 14px;
        width: 14px;
        left: 2px;
        bottom: 2px;
        background-color: #0d5e97;
        transition: 0.2s;
    }
`;

// -- Card --
export const Card = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    border: 4px solid #0d5e97;
    box-shadow: 4px 4px 0 #0d5e97;
    overflow-x: auto;
    background-color: white;
    color: #0d5e97;
`;

export const CardBody = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    padding: 1.5rem;
    background-color: inherit;
    color: inherit;
`;

export const CardHeader = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    font-family: monospace;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 0.5rem 1rem;
`;

export const CardFooter = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    font-family: monospace;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    padding: 0.5rem 1rem;
`;

// -- Headings --
const headingBase = `
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin: 0;
  padding: 0.5rem 0;
`;

export const Title = styled.h1.attrs((props) => ({
    className: props.className || "",
}))`${headingBase} font-size: 1.5rem;`;
export const Heading2 = styled.h2.attrs((props) => ({
    className: props.className || "",
}))`${headingBase} font-size: 1.25rem;`;
export const Heading3 = styled.h3.attrs((props) => ({
    className: props.className || "",
}))`${headingBase} font-size: 1.125rem;`;
export const Heading4 = styled.h4.attrs((props) => ({
    className: props.className || "",
}))`${headingBase} font-size: 1.0625rem;`;
export const Heading5 = styled.h5.attrs((props) => ({
    className: props.className || "",
}))`${headingBase} font-size: 1rem;`;
export const Heading6 = styled.h6.attrs((props) => ({
    className: props.className || "",
}))`${headingBase} font-size: 0.9375rem;`;

export const Subtitle = styled.p.attrs((props) => ({
    className: props.className || "",
}))`
    font-family: monospace;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0;
    padding: 0.25rem 0;
`;

// -- Recharts Wrapper --
export const RechartContainer = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    background-color: white;
    border: 3px solid #0d5e97;
    box-shadow: 4px 4px 0 #0d5e97;
    padding: 1rem;
    font-family: monospace;
`;

// -- Custom Chart Container --
export function ChartContainer({
                                   id,
                                   className = "",
                                   children,
                                   ...props
                               }) {
    const uniqueId = useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
        <div
            data-slot="chart"
            data-chart={chartId}
            className={`chart-container ${className}`}
            {...props}
        >
            <ResponsiveContainer>
                {children}
            </ResponsiveContainer>
        </div>
    );
}

// -- Metric UI --
export const MetricRow = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

export const IconWrapper = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
    margin-right: 0.5rem;
`;

export const Label = styled.span.attrs((props) => ({
    className: props.className || "",
}))`
    flex: 1;
`;

export const BarWrapper = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
  flex: 3;
  height: 10px;
  background: #eee;
  border: 2px solid #0d5e97;
  box-shadow: 2px 2px 0 #0d5e97;
  margin: 0 1rem;
`;

export const Bar = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
  height: 100%;
`;

export const Value = styled.div.attrs((props) => ({
    className: props.className || "",
}))`
  min-width: 40px;
  text-align: center;
  border: 2px solid;
  padding: 2px 6px;
  box-shadow: 2px 2px 0 #0d5e97;
  font-size: 0.85rem;
`;
