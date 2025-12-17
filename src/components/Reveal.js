"use client";
import { motion } from "framer-motion";

export default function Reveal({ children, width = "100%", height = "auto", delay = 0 }) {
    return (
        <div style={{ position: "relative", width, height, display: "block" }}>
            <motion.div
                style={{ height: '100%', width: '100%' }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
                {children}
            </motion.div>
        </div>
    );
}