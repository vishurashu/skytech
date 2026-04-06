"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis  } from "lenis/react";
import Navbar from "./navbar";
import Footer from "./footer";
import Loader from "./loader";

export default function mainWrapper({ children }) {
    const pathname = usePathname();
    const lenis = useLenis();
    const [showLoader, setShowLoader] = useState(pathname === "/");

    useEffect(() => {
        if (pathname === "/") {
            setShowLoader(true);
        }
    }, [pathname]);

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
    }, [pathname, lenis]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        let currentX = 0, currentY = 0;
        let targetX = 0, targetY = 0;
        let animationId;

        const circles = document.querySelectorAll(".blur-circle");
        if (!circles.length) return;

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            targetX = (e.clientX / innerWidth - 0.5) * 2;
            targetY = (e.clientY / innerHeight - 0.5) * 2;
        };

        window.addEventListener("mousemove", handleMouseMove);

        function animate() {
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;

            circles.forEach((circle) => {
                circle.style.transform = `translate(${-currentX * 30}px, ${-currentY * 30}px)`;
            });

            animationId = requestAnimationFrame(animate);
        }

        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [pathname]);

    return (
        <>
            {showLoader && (
                <Loader onFinish={() => setShowLoader(false)} />
            )}
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
                <Navbar />
                {children}
                <Footer />
            </ReactLenis>

        </>
    );
}