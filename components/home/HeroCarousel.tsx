"use client";

import React, { useState, useEffect, useCallback } from "react";

const IMAGES = [
  "/company/dccc (8).jpg",
  "/company/dccc (5).jpg",
  "/company/dccc (15).jpg",
  "/company/dccc (29).jpg",
  "/company/dccc (20).jpg",
  "/company/dccc (13).jpg",
  "/company/dccc (7).jpg",
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
