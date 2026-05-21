import React from "react";

/**
 * InteractiveGridPattern — pure CSS hover (no React state per cell).
 * The browser handles fill changes natively via :hover; React never re-renders on mouse move.
 */
export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares = [24, 24],
    className = "",
    squaresClassName = "",
    ...props
}) {
    const [horizontal, vertical] = squares;
    const total = horizontal * vertical;

    return (
        <svg
            width={width * horizontal}
            height={height * vertical}
            className={`absolute inset-0 h-full w-full ${className}`}
            {...props}
        >
            {Array.from({ length: total }, (_, index) => {
                const x = (index % horizontal) * width;
                const y = Math.floor(index / horizontal) * height;
                return (
                    <rect
                        key={index}
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        className={`grid-cell stroke-gray-400/20 fill-transparent ${squaresClassName}`}
                    />
                );
            })}
        </svg>
    );
}
