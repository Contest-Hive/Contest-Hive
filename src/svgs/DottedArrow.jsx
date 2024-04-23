import React from "react";

const DottedArrow = () => {
  return (
    <svg
      class="pointer-events-none -mt-4 h-60 select-none fill-zinc-400 text-zinc-400"
      viewBox="145.281 153.683 762.1 455.8"
    >
      <g
        stroke-width="7"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="17 18"
      >
        <path
          d="M 520 216 C 524 243 533 256 557 267 Q 654 317 497 395 Q 398 448 496 535 C 511 551 510.6667 562.6667 514 571"
          marker-end="url(#SvgjsMarker2053)"
        ></path>
      </g>
      <defs>
        <marker
          markerWidth="4"
          markerHeight="4"
          refX="2"
          refY="2"
          viewBox="0 0 4 4"
          orient="auto"
          id="SvgjsMarker2053"
        >
          <polygon points="0,4 0,0 4,2" fill="currentColor"></polygon>
        </marker>
      </defs>
    </svg>
  );
};

export default DottedArrow;
