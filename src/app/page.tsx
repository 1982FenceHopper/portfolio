"use client";

import Header from "@/components/lander/Header";
import Projects from "@/components/lander/Projects";
import TechStack from "@/components/lander/TechStack";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@react-hook/window-size";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

interface Dot {
  top: number;
  left: number;
  delay: number;
}

interface ScrollTarget extends EventTarget {
  scrollHeight?: number;
  clientHeight?: number;
  scrollTop?: number;
}

const GlowingDot = ({
  top,
  left,
  delay,
}: {
  top: number;
  left: number;
  delay: number;
}) => (
  <div
    className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-0 transition-opacity animate-glow -z-10"
    style={
      {
        top: `${top}px`,
        left: `${left}px`,
        "--delay": `${delay}s`,
        animationDelay: "var(--delay)",
        boxShadow: "0 0 5px #ffff00, 0 0 10px #ffff00",
      } as React.CSSProperties
    }
  />
);

const getRandDot = (maxTop: number, maxLeft: number, maxDelay: number) => {
  return {
    top: Math.floor(Math.random() * (maxTop - 0 + 1)) + 0,
    left: Math.floor(Math.random() * (maxLeft - 0 + 1)) + 0,
    delay: Math.floor(Math.random() * (maxDelay - 0 + 1)) + 0,
  };
};

export default function Home() {
  const [width, height] = useWindowSize();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number>();

  const dots: Dot[] = useMemo(() => {
    return Array.from({ length: 64 }, () => getRandDot(height, width, 5));
  }, [width, height]);

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const elem: ScrollTarget = e.target;
    setScroll(elem.scrollTop!);
    setMaxScroll(elem.scrollHeight! - elem.clientHeight!);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute overflow-y-clip inset-0 p-4 h-full w-full flex flex-row gap-2 space-y-2 justify-center bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_65%_85%_at_50%_50%,#000_60%,transparent_100%)]">
      {isLoaded &&
        dots.map((dot, index) => <GlowingDot key={index} {...dot} />)}
      <ScrollArea
        ref={scrollRef}
        onScrollCapture={onScroll}
        className={cn(
          "bg-transparent w-full transition-all duration-500",
          `${
            scroll == 0
              ? "blur-mask-start"
              : scroll == maxScroll
              ? "blur-mask-end"
              : "blur-mask"
          }`
        )}
      >
        <div className="flex flex-col mx-[32rem] space-y-4 backdrop-blur-sm">
          <Header />
          <TechStack />
          <Projects />
        </div>
      </ScrollArea>
    </div>
  );
}
