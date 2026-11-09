"use client";

import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  label: string;
}

export const AutoplayVideo: React.FC<AutoplayVideoProps> = ({ src, label }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByScroll = useRef(false);
  const pausedByViewer = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!pausedByViewer.current) void video.play().catch(() => {});
        } else if (!video.paused) {
          pausedByScroll.current = true;
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      aria-label={label}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      onPlay={() => {
        pausedByViewer.current = false;
      }}
      onPause={() => {
        pausedByViewer.current = !pausedByScroll.current;
        pausedByScroll.current = false;
      }}
      className="aspect-video w-full rounded-lg bg-black object-contain"
    />
  );
};
