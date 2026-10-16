"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "./ui";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlaybackPreference = () => setIsPlaying(!motionPreference.matches);

    syncPlaybackPreference();
    motionPreference.addEventListener("change", syncPlaybackPreference);
    return () => motionPreference.removeEventListener("change", syncPlaybackPreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <section className="relative isolate flex min-h-dvh overflow-hidden bg-[#171121] text-white">
      {/* Local video keeps the backdrop vivid while the overlays protect text contrast. */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        src="/hero_video_1.mp4"
        poster="/colourful_blur.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,10,27,.91)_0%,rgba(22,13,37,.77)_42%,rgba(26,12,37,.34)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(12,8,20,.7)_0%,transparent_38%,rgba(15,10,27,.16)_100%)]" />
      <div className="pointer-events-none absolute -right-44 top-12 -z-10 h-136 w-136 rounded-full bg-brand/20 blur-[110px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-5 pb-9 pt-32 sm:px-8 sm:pb-11 sm:pt-36 lg:px-8 lg:pt-40">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.07] tracking-[-0.045em] sm:text-6xl lg:text-[4.75rem]">
            Big idea?
            <br className="hidden sm:block" />{" "}
            <span className="text-[#C8B9FF]">Meet your expert.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Find a vetted expert in your subject. Agree on the plan together, then
            review each milestone before payment is released.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button
              href="/signup"
              variant="primary"
              size="lg"
              className="w-full justify-center px-7 py-4 shadow-[0_10px_35px_rgba(110,68,255,.35)] sm:w-auto"
            >
              Find your expert
              <ArrowRight size={17} aria-hidden="true" />
            </Button>
            <Button
              href="#how-it-works"
              variant="outline"
              size="lg"
              className="w-full justify-center border-white/55 bg-white/10 px-7 py-4 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
            >
              See how it works
            </Button>
          </div>
        </motion.div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/25 pt-5 text-sm font-medium text-white/90 sm:mt-16 sm:flex-row sm:items-center sm:gap-0">
          <p className="sm:pr-6">Vetted subject experts</p>
          <p className="border-white/25 sm:border-l sm:px-6">Milestones agreed together</p>
          <p className="border-white/25 sm:border-l sm:px-6">You approve before payment</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsPlaying((playing) => !playing)}
        className="absolute right-5 top-24 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:bottom-9 lg:right-8 lg:top-auto"
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        aria-pressed={isPlaying}
      >
        {isPlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
      </button>
    </section>
  );
}
