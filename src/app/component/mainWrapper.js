"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import Navbar from "./navbar";
import Footer from "./footer";
import Loader from "./loader";

export default function mainWrapper({ children }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // show loader on route change
        setLoading(true);

        document.body.classList.add("loading");

        const timer = setTimeout(() => {
            setLoading(false);
            document.body.classList.remove("loading");
        }, 5000);

        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        let currentX = 0, currentY = 0;
        let targetX = 0, targetY = 0;

        const circles = document.querySelectorAll(".blur-circle");

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
        
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [pathname]); 

    return (
        <>
            <ReactLenis root>
                <Navbar />
                {children}
                <Footer />
            </ReactLenis>

            {loading && <Loader onFinish={() => setLoading(false)} />}
        </>
    );
}