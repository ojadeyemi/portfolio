"use client";

import { Play, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface VideoModalProps {
  videoSrc: string;
  title: string;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  videoSrc,
  title,
  returnFocusRef,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const trigger = returnFocusRef.current;
    dialogRef.current?.showModal();

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [returnFocusRef]);

  return (
    <motion.dialog
      ref={dialogRef}
      aria-label={title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-0 flex h-dvh max-h-none w-full max-w-none items-center justify-center border-0 bg-black/85 p-4 backdrop-blur-sm backdrop:bg-transparent"
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 transition-colors hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <X className="size-5" />
      </button>

      {/* Sized by whichever runs out first, so it fits phones in either orientation. */}
      <motion.div
        initial={reduceMotion ? false : { scale: 0.96 }}
        animate={{ scale: 1 }}
        exit={reduceMotion ? undefined : { scale: 0.96 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="aspect-video w-[min(100%,72rem,calc((100dvh_-_2rem)*16/9))]"
      >
        <video
          src={videoSrc}
          aria-label={title}
          autoPlay
          controls
          playsInline
          className="size-full rounded-lg bg-black object-contain"
        />
      </motion.div>
    </motion.dialog>
  );
};

interface HeroVideoDialogProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  title: string;
  duration: string;
}

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt,
  title,
  duration,
}: HeroVideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={`Play ${title}, ${duration}`}
        onClick={() => setIsOpen(true)}
        className="group relative block w-full overflow-hidden rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Image
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1280}
          height={718}
          sizes="(min-width: 768px) 720px, 100vw"
          className="aspect-video w-full object-cover transition no-drag group-hover:brightness-95"
        />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-neutral-900 py-2 pl-3 pr-4 text-sm font-medium text-white shadow-md transition-colors group-hover:bg-neutral-700 sm:bottom-4 sm:left-4">
          <Play className="size-4 fill-current" />
          Play
          <span className="font-normal text-white/70">{duration}</span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <VideoModal
            videoSrc={videoSrc}
            title={title}
            returnFocusRef={triggerRef}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
