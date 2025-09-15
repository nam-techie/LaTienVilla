import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
    hasHoverEffect?: boolean;
    children: React.ReactNode;
    className?: string;
    index?: number;
}

const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const slideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const rollVariants = {
    hidden: { opacity: 0, rotate: -90, x: -100 },
    visible: { opacity: 1, rotate: 0, x: 0 },
};

const variantsArray = [fadeVariants, slideVariants, rollVariants];

const AnimatedCard: React.FC<AnimatedCardProps> = ({
    hasHoverEffect = true,
    children,
    className = '',
    index = 0,
    ...rest
}) => {
    // Choose variant based on index to alternate animations
    const variant = variantsArray[index % variantsArray.length];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variant}
            transition={{ duration: 0.6 }}
            whileHover={hasHoverEffect ? { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' } : {}}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
