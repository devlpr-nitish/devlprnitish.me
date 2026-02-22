"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeShutter() {
    const { resolvedTheme } = useTheme();
    const prevTheme = useRef<string | undefined>(undefined);
    const [animKey, setAnimKey] = useState(0);
    const [shutterColor, setShutterColor] = useState("#fff");
    // light mode → top-to-bottom (originY starts at 0, exits from 1)
    // dark mode  → bottom-to-top (originY starts at 1, exits from 0)
    const [direction, setDirection] = useState<"top" | "bottom">("top");

    useEffect(() => {
        if (prevTheme.current === undefined) {
            prevTheme.current = resolvedTheme;
            return;
        }
        if (prevTheme.current !== resolvedTheme) {
            const goingLight = resolvedTheme === "light";
            setShutterColor(goingLight ? "#f5f5f5" : "#0d0d0f");
            setDirection(goingLight ? "top" : "bottom");
            setAnimKey((k) => k + 1);
            prevTheme.current = resolvedTheme;
        }
    }, [resolvedTheme]);

    const fromTop = direction === "top";

    return (
        <AnimatePresence>
            {animKey > 0 && (
                <motion.div
                    key={animKey}
                    style={{ backgroundColor: shutterColor }}
                    className="fixed inset-0 z-[9999] pointer-events-none"
                    initial={{ scaleY: 0, originY: fromTop ? 0 : 1 }}
                    animate={{
                        scaleY: [0, 1, 1, 0],
                        originY: fromTop ? [0, 0, 1, 1] : [1, 1, 0, 0],
                    }}
                    transition={{
                        duration: 0.75,
                        times: [0, 0.4, 0.65, 1],
                        ease: [0.76, 0, 0.24, 1],
                    }}
                />
            )}
        </AnimatePresence>
    );
}
