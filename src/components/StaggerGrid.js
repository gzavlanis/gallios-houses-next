"use client";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2 // Delay between each item
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function StaggerGrid({ children, columns = 3 }) {
    // We use a CSS grid layout applied to the motion.div
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
                gap: '30px'
            }}
        >
            {/* We need to wrap each child in a motion component automatically?
          Actually, it's safer to just use this wrapper and let you wrap children manually if needed,
          but here is a helper to wrap them automatically: */}
            {children}
        </motion.div>
    );
}

// Export a helper for the items inside
export function StaggerItem({ children, span = 1 }) {
    return (
        <motion.div
            variants={item}
            style={{ gridColumn: `span ${span}` }}
        >
            {children}
        </motion.div>
    );
}