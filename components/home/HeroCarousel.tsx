"use client";

import React, { useState, useEffect, useCallback } from "react";

const IMAGES = [
  "/company-webp/dccc (8).webp",
  "/company-webp/dccc (5).webp",
  "/company-webp/dccc (15).webp",
  "/company-webp/dccc (29).webp",
  "/company-webp/dccc (20).webp",
  "/company-webp/dccc (13).webp",
  "/company-webp/dccc (7).webp",
];

const INTERVAL_MS = 4500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + IMAGES.length) % IMAGES.length);
  }, []);

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Laxmi Steels facility ${i + 1}`}
          draggable={false}
          className={`
  absolute inset-0 h-full w-full object-cover
  transition-opacity duration-[2000ms]
  ease-[cubic-bezier(0.22,1,0.36,1)]
  will-change-opacity
  ${i === current ? "opacity-100" : "opacity-0"}
`}
        />
      ))}
    </div>
  );
}
